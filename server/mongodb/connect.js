import mongoose from "mongoose"; //library of mongodb

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  //This line attempts to connect to the MongoDB database using the provided url.
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
