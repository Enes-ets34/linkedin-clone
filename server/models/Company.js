const mongoose = require("mongoose");
const slugify = require("slugify");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  media: {
    type: String,
  },
  slug: {
    type: String,
  },
  employees: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

companySchema.pre("validate", function (next, err) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next()
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
