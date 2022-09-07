import mongoose from "mongoose";

const postsSchema=mongoose.Schema({
    title:String,
    author:String,
    image:String,
    description:String,
    like:{ type:Number, default:0 },
    dislike: { type: Number , default: 0 },
    comments:{ name:String, comment:String };
});

const posts=mongoose.model('posts', postsSchema);
export default posts;
