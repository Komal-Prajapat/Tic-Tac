import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  const { name, gmail, password } = req.body;

  if (!gmail) {
    return res.status(400).json({ message: "Email is required." });
  }
  try {
    const newUser = new User({ name, gmail, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists." });
    } else {
      res.status(500).json({ message: "An error occurred." });
    }
  }
};
