import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const CategoryModel = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true }
})
export default mongoose.model('categories', CategoryModel)