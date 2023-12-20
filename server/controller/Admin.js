const { logger } = require("../config/logger");
const User = require("../model/userSchema");

const Admin = {
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const checkUser = await User.findOne({ email });
      if (checkUser) {
        return res.status(400).json("This email already exists !");
      }
      const newUser = new User({
        username,
        email,
      });
      newUser.save()
      .then((result) => {
        logger.log('info', 'User Create', { message: 'User Create ' + result.username });
      }).catch((err) => {
        logger.log('error', 'User Create', { message: err });
      });
      res.status(201).json("User Create succesful !");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const checkUser = await User.findByIdAndDelete(userId);
      if (!checkUser) {
        return res.status(404).json("This user Not Found !");
      }
      logger.log('info', ' User Delete', { message: ' user deleted.. Id: ' + userId });
      res.status(201).json("User Delete succesful !");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = Admin;
