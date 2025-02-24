import mongoose, { Schema, model } from "mongoose";
import { ITemplate } from "./template.interface";

const templateGuideSchema = new Schema({
  guideDetails: { type: String, required: true },
  guideImageUrl: { type: String, required: false },
  guideVideoUrl: { type: String, required: false },
});

const templateSchema = new Schema<ITemplate>(
  {
    title: { type: String, required: true },
    templateImageUrl: { type: String, required: false },
    templateDetails: { type: String, required: true },
    templateGuide: [templateGuideSchema],
    category: { type: String, required: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
  },
  { timestamps: true }
);

const Template = model<ITemplate>("Template", templateSchema);

export default Template;
