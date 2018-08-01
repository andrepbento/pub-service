import mongoose from "mongoose";

const Schema = mongoose.Schema;
const StarRatingModel = new Schema({
  id: Schema.Types.ObjectId,
  numberOfStars: { type: Number, required: true },
  detail: String,
  created: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("StarRating", StarRatingModel);
