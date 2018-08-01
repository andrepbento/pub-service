import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PubModel = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: false },
    location: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    items: { type: Schema.Types.ObjectId, ref: 'Item' }
});

export default mongoose.model("Pub", PubModel);
