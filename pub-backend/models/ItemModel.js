import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ItemModel = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  ratings: { type: Schema.Types.ObjectId, ref: 'StarRating' }
});

export default mongoose.model("Item", ItemModel);
