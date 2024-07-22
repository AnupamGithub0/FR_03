import { User } from "../Models/User.js";
import bcrypt from 'bcrypt'
export const userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (userName === "") {
      return res.json({
        success: false,
        message: "Username is required",
      });
    } else if (email === "") {
      return res.json({
        success: false,
        message: "Email is required",
      });
    } else if (password === "") {
      return res.json({
        success: false,
        message: "Password is required",
      });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.json({
        success: false,
        message: "User already existed !",
      });
    }

    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash =  bcrypt.hashSync(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hash,
      coins: "10",
      role:0
    });

    return res.json({
      success: true,
      message: "Registerd Successed !",
      data: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while user register",
    });
  }
};
