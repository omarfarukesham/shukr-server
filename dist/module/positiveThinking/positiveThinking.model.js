"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const positiveThinkingSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    isShowing: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const PositiveThinking = (0, mongoose_1.model)("PositiveThinking", positiveThinkingSchema);
exports.default = PositiveThinking;
