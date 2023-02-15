const CustomError = require("../helpers/error/CutomError");
const errorHandler = (err, req, res, next) => {
  let customError = err;

  if (err.name === "SyntaxError") {
    customError = new CustomError("Unexpected Syntax", 400);
  }
  if (err.code === 11000 && err.name === "MongoServerError") {
    customError = new CustomError("Please Try Different valid An Email", 400);
  }
  if (err.name === "ValidationError") {
    customError = new CustomError(err.message, 400);
  }
  console.log("customError :>> ", customError.message, customError.status);

  res.status(customError.status || 500).json({
    success: "false",
    message: customError.message,
  });
};
module.exports = errorHandler;
