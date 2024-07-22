import { RoomId } from "../../Models/RoomIdPass.js";

export const RoomIdPassword = async (req, res) => {
  try {
    const { tournamentId, roomId, password } = req.body;

    // Check if the RoomId already exists for this tournament and user
    const existingRoomId = await RoomId.findOne({
      tournamentsId: tournamentId,
      owner: req.user
    });

    if (existingRoomId) {
      return res.json({
        success: false,
        message: "Room ID and password already exist",
        redirect: "/my-contest" // Provide the redirect URL
      });
    }

    const newRoomId = new RoomId({
      tournamentsId: [tournamentId],
      roomId,
      password,
      owner: req.user,
    });

    await newRoomId.save();

    return res.json({
      success: true,
      message: "Successfully created Room ID and password",
      data: newRoomId,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while creating Room ID and password",
    });
  }
};
