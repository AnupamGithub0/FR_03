import { Tournament } from "../../Models/CreateTournament.js";

// Fetch tournament details (including joined users and room details for admins)
export const getTournamentDetails = async (req, res) => {
  try {
    const { tournamentId } = req.params;
    const tournament = await Tournament.findById(tournamentId).populate('joinedUsers', 'userName');

    if (!tournament) {
      return res.status(404).json({ success: false, message: "Tournament not found" });
    }

    // Check if the current user is an admin
    if (req.user.role !== 1) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const roomDetails = {
      roomId: tournament.roomId,
      password: tournament.password,
    };

    res.status(200).json({ success: true, roomDetails, joinedUsers: tournament.joinedUsers });
  } catch (error) {
    console.error('Error fetching tournament details:', error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
