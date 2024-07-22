import { Tournament } from "../../Models/CreateTournament.js";

export const Mycontest = async (req, res) => {
  try {
    const userId = req.user; 
    const myContest = await Tournament.find({ owner: userId });

    return res.json({
      success: true,
      message: "Fetch succeeded",
      data: myContest,
      total:myContest.length
    });
  } catch (error) {
    console.error("Error while fetching contests:", error);
    return res.json({
      success: false,
      message: "Error while fetching contests",
    });
  }
};
