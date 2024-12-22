const express = require("express");
const router = express.Router();

//routes

//middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware");

//routes
const authRoute = require("../modules/Auth/controller");
const userRoute = require("../modules/User/controller");
const categoryRoute = require("../modules/Category/controller");

//EndPoint

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use(authVerifyMiddleware);

module.exports = router;
