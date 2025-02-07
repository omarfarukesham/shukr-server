import ShukrPost from './shukrPost.model';
import { IShukrPost } from './shukrPost.model';

const createShukrPost = async (payload: IShukrPost) => {
  const result = await ShukrPost.create(payload);
  return result;
};

const getAllShukrPosts = async (filters: any) => {
  const result = await ShukrPost.find(filters);
  return result;
};

const getSingleShukrPost = async (id: string) => {
  const result = await ShukrPost.findById(id);
  return result;
};

const updateShukrPost = async (id: string, payload: Partial<IShukrPost>) => {
  const result = await ShukrPost.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteShukrPost = async (id: string) => {
  const result = await ShukrPost.findByIdAndDelete(id);
  return result;
};

export const shukrPostService = {
  createShukrPost,
  getAllShukrPosts,
  getSingleShukrPost,
  updateShukrPost,
  deleteShukrPost,
};
