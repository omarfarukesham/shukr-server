import mongoose, { Schema, model } from "mongoose";
import { ITemplate } from "./template.interface";

const templateDataSchema = new Schema({
  type: {
    type: String,
    enum: ["description", "question"],
    required: true,
  },
  content: { type: String, required: true },
});


const templateSchema = new Schema<ITemplate>(
  {
    title: { type: String, required: true },
    templateImageUrl: { type: String, required: false },
    templateGuide: {
      type: String,
      required: false
    },
    templateData: [templateDataSchema],
    category: {
       type: String,
      required: true,
      },
    createdBy: { type: String },
    updatedBy: { type: String },
  },
  { timestamps: true }
);

const Template = model<ITemplate>("Template", templateSchema);

export default Template;
