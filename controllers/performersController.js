const Performer = require("../models/performer");

/*
//Get /performers: Returns a list of all performers.
router.get("/", performerCtrl.index);
//Post /Performers: Accepts performer data and creates a new performer
router.post("/", performerCTRL.create);
*/

exports.index = async (req, res) => {
  try {
    const performers = await Performer.find({});
    res.status(200).json(performers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const createdPerformer = await Performer.create(req.body);
    res.status(200).json({ message: error.message });
  } catch (error) {}
};
