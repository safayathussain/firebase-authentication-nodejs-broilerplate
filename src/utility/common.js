const jwt = require('jsonwebtoken')
function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000)
    .toString()
    .padStart(4, "0");
  return otp;
}

const asyncHandler = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};

function convertTo4Digit(number) {
  let numStr = String(number);

  let zerosNeeded = 4 - numStr.length;

  for (let i = 0; i < zerosNeeded; i++) {
    numStr = "0" + numStr;
  }

  return numStr;
}
const useToken = ({ payload, res }) => {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "60d",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 30 * 24 * 60 * 60 * 1000, //2 month
    path: "Strict",
  });
  return { accessToken, refreshToken };
};
module.exports = {
  generateOTP,
  asyncHandler,
  convertTo4Digit,
  useToken
};
