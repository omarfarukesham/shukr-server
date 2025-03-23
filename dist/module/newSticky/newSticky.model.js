"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newStickySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: 10,
        maxlength: 500,
    },
    isShowing: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const NewSticky = (0, mongoose_1.model)("NewSticky", newStickySchema);
exports.default = NewSticky;
