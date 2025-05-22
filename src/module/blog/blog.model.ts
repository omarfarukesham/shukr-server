import mongoose, { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
      
    },
    description: {
        type: String,
        required: true,
       
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    image: {
        type: String,
        required: true,
    
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    }
}, 
{
    timestamps: true, 
  });

const Blog = model<IBlog>("appBlog", blogSchema);

export default Blog;
