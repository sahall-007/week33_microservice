import { Schema, model} from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    }
}, {timestamps: true})

const User = model('user', userSchema)
export default User