import NatureBeauty from './natureBeauty.model';
import { INatureBeauty } from './natureBeauty.model';

const createNatureBeauty = async (payload: INatureBeauty) => {
  const result = await NatureBeauty.create(payload);
  return result;
};

const getAllNatureBeauties = async (filters: any) => {
  const result = await NatureBeauty.find(filters);
  return result;
};

const getSingleNatureBeauty = async (id: string) => {
  const result = await NatureBeauty.findById(id);
  return result;
};

const updateNatureBeauty = async (id: string, payload: Partial<INatureBeauty>) => {
  const result = await NatureBeauty.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteNatureBeauty = async (id: string) => {
  const result = await NatureBeauty.findByIdAndDelete(id);
  return result;
};

export const natureBeautyService = {
  createNatureBeauty,
  getAllNatureBeauties,
  getSingleNatureBeauty,
  updateNatureBeauty,
  deleteNatureBeauty,
};
