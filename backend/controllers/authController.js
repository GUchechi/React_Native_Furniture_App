const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  // Create User
  createUser: async (req, res) => {
    const { username, email, location, password } = req.body;
    const newUser = new User({
      username,
      email,
      location,
      password: CryptoJS.AES.encrypt(password, process.env.SECRET).toString(),
    });

    try {
      await newUser.save();

      res.status(201).json({ message: "User sucessfully created" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  // Login User
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json("Wrong credentials, please provide a valid email");
      }

      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET
      );
      const decryptedPass = decryptedPassword.toString(CryptoJS.enc.Utf8);

      decryptedPass !== req.body.password &&
        res.status(401).json("Authentication failed");

      const userToken = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

      res.status(200).json({ ...userData, token: userToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
