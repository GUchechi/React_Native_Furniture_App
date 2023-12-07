const User = require("../models/User");

module.exports = {
  // Delete User
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      return res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get User
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "No user found" });
      }
      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
