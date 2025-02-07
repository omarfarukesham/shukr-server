"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/category.model.ts
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    isShowing: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        required: true,
        enum: ['PositiveThinking', 'NatureBeauty', 'ShukrPost', 'Jazakallahul', 'Inspiration'],
    },
}, {
    timestamps: true,
});
const Category = (0, mongoose_1.model)('Category', categorySchema);
exports.default = Category;
/**
 * https://iili.io/2DNwoNf.png
https://iili.io/2DNwnAG.png
https://iili.io/2DNwC9s.png


https://iili.io/2DNwIol.png
https://iili.io/2DNwuPS.png
https://iili.io/2DNwRK7.png
 */ 
