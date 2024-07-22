import { User } from "../../Models/User.js";

export const getAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    return res.json({
      success: true,
      data: user,
      message: "Admin get successed",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while get user",
    });
  }
};
