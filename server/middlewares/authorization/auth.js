const CustomError = require("../../helpers/error/CutomError");
const jwt = require("jsonwebtoken");

const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    return next(new CustomError("You are not auth. for this route.", 401));
  }
  const access_token = getAccessTokenFromHeader(req);
  jwt.verify(access_token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      next(new CustomError("You are not auth. for this route.", 403));
    }
    req.user = {
      ...decoded,
    };
    next();
  });
};

module.exports = { getAccessToRoute };
