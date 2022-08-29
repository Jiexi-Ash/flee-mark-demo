import { connectDB } from "db/connectDB";
import User from "db/models/userModel";
import { hashPassword } from "db/utils/tools";
import { userExists } from "db/services/user.services";

export const register = async (req, res) => {
  if (req.method === "POST") {
    await connectDB();

    try {
      const { name, surname, email, password } = req.body;

      if (await userExists(email)) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await hashPassword(password);

      const user = new User({
        name,
        surname,
        email,
        password: hashedPassword,
      });

      await user.save();

      return res.status(201).json({
        message: "User created successfully",
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        err: error.message,
      });
    }
  }
};

export default register;
