const sendJwtToClient = (user, res) => {
  const token = user.generatejwtFromUser();
  const { JWT_COOKIE_EXPIRE } = process.env;

  return res
    .status(200)
    .cookie("access_token", token, {
       expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRE) * 60000),
      httpOnly: true,
      secure: false,
    })
    .json({
      status: "success",
      access_token: token,
      user,
    });
};
const isTokenIncluded = (req) => {
  return (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer: ")
  );
};

const getAccessTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;
  const access_token = authorization.split(" ")[1];
  return access_token;
};
module.exports = { sendJwtToClient, isTokenIncluded, getAccessTokenFromHeader };
