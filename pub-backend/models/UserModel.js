import mongoose from "mongoose";
import isEmail from '../utils/StringUtils'

const Schema = mongoose.Schema;
const UserModel = new Schema({
    id: Schema.Types.ObjectId,
    email: {
        type: String, 
        required: true, 
        validate: {
            validator: email => {
                return isEmail(email);
            },
            message: 'email param must be an email like abc@mail.com'
        }
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: String
    },
    age: Number,
    profilePicture: Buffer,
    purchasedItems: { type: Schema.Types.ObjectId, ref: "Item" }
});

export default mongoose.model("UserRating", UserModel);
