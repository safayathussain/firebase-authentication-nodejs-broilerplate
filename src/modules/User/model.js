const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "BU",
      // BU => Basic User
      // AD => Admin
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);
// UserSchema.virtual("accessToken").get(function () {
//   return jwt.sign(
//     { id: this._id, email: this.email, role: this.role },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "1h",
//     }
//   );
// });

// UserSchema.set("toJSON", { virtuals: true });
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
