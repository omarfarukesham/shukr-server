"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const templateGuideSchema = new mongoose_1.Schema({
    guideDetails: { type: String, required: true },
    guideImageUrl: { type: String, required: false },
    guideVideoUrl: { type: String, required: false },
});
const templateSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    templateImageUrl: { type: String, required: false },
    templateDetails: { type: String, required: true },
    templateGuide: [templateGuideSchema],
    category: { type: String, required: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
}, { timestamps: true });
const Template = (0, mongoose_1.model)("Template", templateSchema);
exports.default = Template;
