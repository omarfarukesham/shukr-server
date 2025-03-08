"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const challengeSchema = new mongoose_1.Schema({
    challengeId: {
        type: String,
        unique: true,
        default: () => new mongoose_1.Types.ObjectId().toString(),
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,
    },
    startedAt: {
        type: Date,
        default: null,
    },
    image: {
        type: String,
    },
    completedAt: {
        type: Date,
        default: null,
    },
    templateId: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Template",
            required: true,
        },
    ],
    userInfo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "appUser",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isLoop: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    resettable: {
        type: Boolean,
        default: false,
    },
    reminderTime: {
        type: String,
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    category: {
        type: String,
    },
    visibility: {
        type: String,
        enum: ["FREE", "PRO"],
        required: true,
    },
    streak: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: String,
    },
    updatedBy: {
        type: String,
    },
}, { timestamps: true });
const Challenge = (0, mongoose_1.model)("Challenge", challengeSchema);
exports.default = Challenge;
