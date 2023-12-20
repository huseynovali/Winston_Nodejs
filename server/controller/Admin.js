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
      newUser.save();
      res.status(201).json("User Create succesful !");
    } catch (error) {
       return  res.status(500).json(error)
    }
  },
 deleteUser:async()=>{
    
 }



};

module.exports = Admin;
