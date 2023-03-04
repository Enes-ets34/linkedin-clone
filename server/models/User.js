const mongoose = require("mongoose");
const { Schema } = mongoose;
const CryptoJS = require("crypto-js");
const slugify = require("slugify");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Post = require("./Post");

const userSchema = new Schema({
  password: {
    type: String,
    required: true,
    minlength: [6, "Please Provide A Password with min lenth 6"],
    trim: true,
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please Provide An Email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please Provide A Valid Email",
    ],
    trim: true,
  },
  slug: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date(Date.now()),
  },
  reset_password_token: {
    type: String,
  },
  reset_password_expire: {
    type: Date,
  },
  full_name: {
    type: String,
    min: 3,
    max: 17,
    trim: true,
  },
  profile_image: {
    type: String,
    default: "default.png",
  },
  about: {
    type: String,
  },
  location: {
    type: String,
  },
  title: {
    type: String,
  },
  education: {
    type: Array,
  },
  experience: {
    type: Object,
  },
  skills: {
    type: Array,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

//UserSchema Functions
userSchema.methods.generatejwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    id: this.id,
    name: this.name,
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });
  return token;
};
userSchema.methods.getResetPasswordTokenFromUser = function () {
  const { RESET_PASSWORD_EXPIRE } = process.env;
  const randomHexString = crypto.randomBytes(15).toString("hex");
  const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");
  this.reset_password_token = resetPasswordToken;
  this.reset_password_expire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);
  return this.reset_password_token;
};

//Pre Hooks
userSchema.pre("validate", function (next, err) {
  const { _SALTKEY } = process.env;
  //Hata var ise
  if (err) next(err);

  //Parola değişmemiş ise
  if (!this.isModified("password")) return next();
  const user = this;
  user.slug = slugify(user.full_name, {
    lower: true,
    strict: true,
  });
  user.password = CryptoJS.HmacSHA1(user.password, _SALTKEY).toString();
  next();
});

userSchema.post("remove", async function () {
  try {
    await Post.deleteMany({
      user: this._id,
    });
  } catch (error) {
    return next(error);
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
