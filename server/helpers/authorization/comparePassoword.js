const comparePassword = (password) => {
  const CryptoJS = require("crypto-js");
  const { _SALTKEY } = process.env;
  password = CryptoJS.HmacSHA1(password, _SALTKEY).toString();

  return password;
};
module.exports = comparePassword;
