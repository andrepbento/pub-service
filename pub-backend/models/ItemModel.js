import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ItemModel = new Schema({
    id: Schema.Types.ObjectId,
    name:  { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    date: { type: Date, required: true }
})
export default mongoose.model('items', ItemModel)