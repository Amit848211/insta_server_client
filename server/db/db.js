import mongoose from "mongoose";



export const connectDB = async ()=>{
   try {
       await mongoose.connect(process.env.MONGO_URL)
       console.log("db connection successfully");
   } catch (error) {
        console.log("Error",error);
   }
}