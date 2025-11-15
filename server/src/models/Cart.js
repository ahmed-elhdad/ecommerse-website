import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  items: [],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});
export default mongoose.model("Cart", cartSchema);
