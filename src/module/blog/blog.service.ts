import QueryBuilder from "../../builder/querybuilder";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";
import mongoose from "mongoose";
import User from '../user/user.model';

const createBlog = async (payload: IBlog): Promise<IBlog> => {
  // Create blog first
  const createdBlog = await Blog.create(payload);
  // Populate author fields after creation
  const populatedBlog = await Blog.findById(createdBlog._id).populate(
    "author",
    "name email role"
  );
  if (!populatedBlog) throw new Error("Blog creation failed");
  return populatedBlog;
};

// search, filtering, pagination
const getBlogs = async (query: Record<string, unknown>) => {
  const searchableFields = ["title", "content"];

  const blogsQuery = new QueryBuilder(Blog.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .select();

  const blogs = await blogsQuery.modelQuery.populate("author", "name email role");
  return blogs;
};

const getSingleBlog = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid blog ID");
  }
  const blog = await Blog.findById(id).populate("author", "name email role");
  if (!blog) throw new Error("Blog not found");
  return blog;
};

// Partial update with authorization check (author only)
const updateBlog = async (id: string, data: Partial<IBlog>, userId: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid blog ID");
  }
  // Find the blog and ensure author matches userId
  const blog = await Blog.findOne({ _id: id, author: userId });
  if (!blog) throw new Error("Blog not found or unauthorized");

  Object.assign(blog, data);

  // Save triggers schema validators
  const updatedBlog = await blog.save();

  // Populate before return
  await updatedBlog.populate("author", "name email role");
  return updatedBlog;
};

// Delete blog only if owned by userId
const deleteBlog = async (blogId: string, userId: string) => {
  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    throw new Error("Invalid blog ID");
  }
  const deletedBlog = await Blog.findOneAndDelete({ _id: blogId, author: userId });
  if (!deletedBlog) throw new Error("Blog not found or unauthorized to delete");
  return deletedBlog;
};

export const blogService = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
