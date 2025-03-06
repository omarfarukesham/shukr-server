import mongoose, { Schema, model } from "mongoose";
import { ITemplate } from "./template.interface";

const templateGuideSchema = new Schema({
  guideDetails: { type: String, required: false },
  guideImageUrl: { type: String, required: false },
  guideVideoUrl: { type: String, required: false },
});

const templateSchema = new Schema<ITemplate>(
  {
    title: { type: String, required: true },
    templateImageUrl: { type: String, required: false },
    templateDetails: { type: String, required: true },
    templateGuide: [templateGuideSchema],
    category: { type: String },
    createdBy: { type: String},
    updatedBy: { type: String},
  },
  { timestamps: true }
);

const Template = model<ITemplate>("Template", templateSchema);

export default Template;
