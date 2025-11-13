import Prudoct from "../models/Prudoct.js";
import User from "../models/User.js";
export const getPrudocts = async (req, res) => {
  const { category } = await req.body;
  if (!category) {
    res.json({ message: "valid category" });
    return;
  }
  const prudocts = Prudoct.find({ category: category });
  res.status(201).json({ data: prudocts });
};

export const createPrudoct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      images,
      price,
      saler,
      prudoctsNum,
      prudoctNo,
    } = await req.body;
    if (
      !title ||
      !description ||
      !category ||
      !images ||
      !price ||
      !saler ||
      !prudoctsNum ||
      !prudoctNo
    ) {
      res.status(301).json({ error: "data required" });
      return;
    }
    const prudoctExit = Prudoct.find({ title: title });
    const salerExit = User.find({ email: saler });
    if (prudoctExit) {
      res.status(301).json({ error: "the prudoct exits" });
      return;
    }
    if (!salerExit) {
      res.status(301).json({ error: "User not found" });
      return;
    }
    if (price <= 0) {
      res.status(301).json({ error: "Valid Price" });
      return;
    }
    if (prudoctsNum <= 0) {
      res.status(301).json({ error: "Valid prudoctsNum" });
      return;
    }
    const numOfPrudocts = (await Prudoct.find({})).length + 1;
    const salerName = salerExit.name;
    const prudoct = new Prudoct({
      title,
      description,
      category,
      images,
      price,
      salerName,
      prudoctsNum,
      numOfPrudocts,
    });
    await prudoct.save();
    res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    res.json({ error: err });
    console.log(err);
  }
};

export const editPrudoct = (req, res) => {
  console.log("edit");
};

export const removePrudoct = (req, res) => {
  console.log("remove");
};
