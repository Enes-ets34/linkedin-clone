const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDatabase;
