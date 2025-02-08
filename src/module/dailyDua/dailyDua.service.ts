import { IDailyDua } from './dailyDua.interface';
import DailyDua from './dailyDua.model';

const createDua = async (payload: IDailyDua): Promise<IDailyDua> => {
  return await DailyDua.create(payload);
};

const getAllDuas = async (query: any): Promise<IDailyDua[]> => {
  return await DailyDua.find(query);
};

const getDuaById = async (id: string): Promise<IDailyDua | null> => {
  return await DailyDua.findById(id);
};

const updateDua = async (id: string, payload: Partial<IDailyDua>): Promise<IDailyDua | null> => {
  return await DailyDua.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const deleteDua = async (id: string): Promise<IDailyDua | null> => {
  return await DailyDua.findByIdAndDelete(id);
};

export const dailyDuaService = {
  createDua,
  getAllDuas,
  getDuaById,
  updateDua,
  deleteDua,
};
