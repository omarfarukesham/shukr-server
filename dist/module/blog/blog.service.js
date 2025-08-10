"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const blog_model_1 = __importDefault(require("./blog.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Create blog first
    const createdBlog = yield blog_model_1.default.create(payload);
    // Populate author fields after creation
    const populatedBlog = yield blog_model_1.default.findById(createdBlog._id).populate("author", "name email role");
    if (!populatedBlog)
        throw new Error("Blog creation failed");
    return populatedBlog;
});
// search, filtering, pagination
const getBlogs = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ["title", "content"];
    const blogsQuery = new querybuilder_1.default(blog_model_1.default.find(), query)
        .search(searchableFields)
        .filter()
        .sort()
        .select();
    const blogs = yield blogsQuery.modelQuery.populate("author", "name email role");
    return blogs;
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid blog ID");
    }
    const blog = yield blog_model_1.default.findById(id).populate("author", "name email role");
    if (!blog)
        throw new Error("Blog not found");
    return blog;
});
// Partial update with authorization check (author only)
const updateBlog = (id, data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid blog ID");
    }
    // Find the blog and ensure author matches userId
    const blog = yield blog_model_1.default.findOne({ _id: id, author: userId });
    if (!blog)
        throw new Error("Blog not found or unauthorized");
    Object.assign(blog, data);
    // Save triggers schema validators
    const updatedBlog = yield blog.save();
    // Populate before return
    yield updatedBlog.populate("author", "name email role");
    return updatedBlog;
});
// Delete blog only if owned by userId
const deleteBlog = (blogId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(blogId)) {
        throw new Error("Invalid blog ID");
    }
    const deletedBlog = yield blog_model_1.default.findOneAndDelete({ _id: blogId, author: userId });
    if (!deletedBlog)
        throw new Error("Blog not found or unauthorized to delete");
    return deletedBlog;
});
exports.blogService = {
    createBlog,
    getBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
