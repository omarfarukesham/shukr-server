"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const jazakallahulSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    isShowing: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const Jazakallahul = (0, mongoose_1.model)('Jazakallahul', jazakallahulSchema);
exports.default = Jazakallahul;
