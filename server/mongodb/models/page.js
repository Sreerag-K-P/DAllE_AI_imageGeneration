import mongoose from "mongoose";

// creating schema
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

// create a model out of this schema
const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
