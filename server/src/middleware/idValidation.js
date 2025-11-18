import mongoose from "mongoose";
export const idValidation = async (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid
};
