import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid Email"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    maxlength: 20,
  },
  surname: {
    type: String,
    required: [true, "Surname is required"],
    maxlength: 30,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: 255,
  },
  role: {
    type: String,
    enum: ["user", "admin", "seller"],
    default: "user",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
