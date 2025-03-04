import mongoose, { Schema, Document } from "mongoose";
import { IContent } from "./content.interface";

interface IContentModel extends IContent, Document {}

const ContentSchema = new Schema<IContentModel>(
  {
    image: { 
        type: String, 
    },
    title: { 
        type: String,
    },
    details: {
         type: String, 
    },
    arabicText: { 
        type: String
     },
    ref: { 
        type: String 
    },   
    isShowing: { 
        type: Boolean, 
        default: true 
    },
    publishDate: { 
        type: Date, 
        default: Date.now 
    },
    totalLikes: { 
        type: Number, 
        default: 0 
    },
    status: { 
        type: String, 
        enum: ["published", "draft"], 
        default: "draft"
    },
    category: {
      type: String,
      enum: [
        "ShukrIns",
        "positiveThinking",
        "jazakallahulKhair",
        "shukrPosts",
        "duaOfTheDay",
        "natureImg",
        "whatNew",
      ],
      required: true,
    },
  },
  { timestamps: true } 
);

export default mongoose.model<IContentModel>("Content", ContentSchema);
