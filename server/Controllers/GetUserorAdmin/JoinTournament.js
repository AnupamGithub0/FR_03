import { Tournament } from "../../Models/CreateTournament.js";
import { User } from "../../Models/User.js";

export const JoinTournament = async (req, res) => {
  try {
    const { tournamentId } = req.params;
    const { playerName } = req.body;
    const user = req.user;

    // Find user by ID
    const findUser = await User.findById(user);
    if (!findUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Find tournament by ID
    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) {
      return res.json({
        success: false,
        message: "Can't find tournament",
      });
    }

    if (tournament.leftPlayers <= 0) {
      return res.json({
        success: false,
        message: "Tournament is full, join another tournament",
      });
    }

    if (tournament.joinedUsers.includes(playerName)) {
      return res.json({
        success: false,
        message: "Your name is already taken",
      });
    }

    const userCoins = parseInt(findUser.coins, 10);
    if (userCoins < tournament.joinCoins) {
      return res.json({
        success: false,
        message: "Insufficient balance",
      });
    }

    findUser.coins = (userCoins - tournament.joinCoins).toString();
    // console.log(`Updated user coins: ${findUser.coins}`);

    tournament.leftPlayers -= 1;
    tournament.joinedUsers.push(playerName);

    if (tournament.owner.includes(req.user)) {
      return res.json({
        success: false,
        message: "You have already joined this tournament",
      });
    } else {
      tournament.owner.push(req.user);
    }

    if (findUser.tournamentJoined.includes(tournamentId)) {
      return res.json({
        success: false,
        message: "You have already joined this tournament 2.0",
      });
    } else {
      findUser.tournamentJoined.push(tournamentId);
    }

    await findUser.save();
    await tournament.save();

    return res.json({
      success: true,
      data: tournament,
      updatedUser: findUser,
      message: "You have joined this tournament",
    });
  } catch (error) {
    console.error("Error in JoinTournament:", error);
    return res.json({
      success: false,
      message: "Error while joining tournament",
    });
  }
};
