import { User } from "../../Models/User.js";

export const TotalUser = async (req, res) => {
    try {
        // Fetch users and filter out users with role 1
        const user = await User.find().select("-password").then(users => {
            return users.filter(user => user.role !== 1);
        });

        // Count the total number of users excluding the ones with role 1
        const totalDocument = user.length;

        return res.json({
            success: true,
            message: "Found all user",
            data: user,
            total: totalDocument
        });

    } catch (error) {
        return res.json({
            success: false,
            message: 'Error while finding users'
        });
    }
};
