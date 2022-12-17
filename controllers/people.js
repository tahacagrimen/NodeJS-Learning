const getPeople = (req, res) => {
  res.status(200).json({ success: true, msg: "show all people" });
};

const createPerson = (req, res) => {
  res.status(200).json({ success: true, msg: "create a person" });
};

const updatePerson = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update person ${req.params.id}` });
};

const deletePerson = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `delete person ${req.params.id}` });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
