import mongoose from "mongoose";

let connection:any={};
const connectDb = async () => {
    try{
        if(connection.isConnected){
            console.log("using existing connection");
            return;
        }
        let db:any=  await mongoose.connect(process.env.MONGO_URI!);
        connection.isConnected=db.connections[0].readyState;
        console.log("Database connected");
    }catch(err){
        throw new Error("Error connecting to database");
    }
};

export default connectDb;