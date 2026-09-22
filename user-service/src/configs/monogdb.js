import mongoose from "mongoose"
import { config } from "dotenv"

config()

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {})
        console.log('Connected to monogdb')
    }
    catch(err){
        console.log(err)
        console.log('Mongodb connection error')        
    }
}

export default connectDb