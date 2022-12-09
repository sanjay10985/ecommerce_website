import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = 'S$@*^FB5IQ!@(#';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  let success = false;
  let existingUser;
  try {
    existingUser = await Users.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ success, message: "User already Exists! Login Instead" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password);

  const user = new Users({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  const data = {
    user: {
      id: user._id,
    },
  };

  const authToken = jwt.sign(data, JWT_SECRET);
  success = true;
  return res.status(201).json({ success, authToken });
};

export const login = async (req, res) => {
  let success = false
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await Users.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({success, message: "User does note Exists! Login Instead" });
  }

  const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({success, message: "Password is wrong" });
  }
  const data = {
    user: {
      id: existingUser._id,
    },
  };

  const authToken = jwt.sign(data, JWT_SECRET);
  success = true;
  return res.status(200).json({success,authToken });
};
