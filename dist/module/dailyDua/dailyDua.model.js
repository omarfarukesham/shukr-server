"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dailyDuaSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: 3,
        maxlength: 100,
    },
    arabicText: {
        type: String,
        required: [true, "Arabic text is required"],
    },
    isShowing: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: 10,
        maxlength: 500,
    },
    reference: {
        type: String,
        required: [true, "Reference is required"],
    },
}, {
    timestamps: true,
});
const DailyDua = (0, mongoose_1.model)("DailyDua", dailyDuaSchema);
exports.default = DailyDua;
