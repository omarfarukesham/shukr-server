"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const templateDataSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["description", "question"],
        required: true,
    },
    content: { type: String, required: true },
});
const templateSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Template = (0, mongoose_1.model)("Template", templateSchema);
exports.default = Template;
