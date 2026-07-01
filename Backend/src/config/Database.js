import mongoose from "mongoose";


async function connecttoDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db");
    }
    catch(error){
        console.error("Database connection error",error);
    }
}

export default connecttoDB;