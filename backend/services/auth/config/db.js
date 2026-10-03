import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db Connected");
  }  catch (error) {
  console.error("DB Error:", error.message);
}
};
