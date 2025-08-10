"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },
    slug: {
        type: String,
        required: false,
        unique: false,
        lowercase: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    tags: [
        {
            type: String,
            lowercase: true,
            trim: true,
        },
    ],
    image: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "appUser",
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
            text: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
    metaTitle: {
        type: String,
        maxlength: 60,
    },
    metaDescription: {
        type: String,
        maxlength: 160,
    },
    readTime: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["draft", "review", "published", "archived"],
        default: "draft",
    },
    scheduledAt: {
        type: Date,
    },
}, {
    timestamps: true,
});
const Blog = (0, mongoose_1.model)("appBlog", blogSchema);
exports.default = Blog;
