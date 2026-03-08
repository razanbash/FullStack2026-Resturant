import e from "express";
import {
  getAllUsers,
  getUserById,
  findUserByEmail,
  deleteUserById,
  updateUserById,
} from "../models/user.Model.js";
import bodyParser from "body-parser";
export const getUserByIdController = async (req, res) => {
  const id = req.params;

  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "user found successfully", user  });
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
};

/// i added this not from my teacher
export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();

    return res.status(200).json({
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const findUserByEmailController = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "user found successfully", user });
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
};
