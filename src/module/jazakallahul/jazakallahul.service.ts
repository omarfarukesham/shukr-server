import Jazakallahul from './jazakallahul.model';
import { IJazakallahul } from './jazakallahul.model';

const createJazakallahul = async (payload: IJazakallahul) => {
  const result = await Jazakallahul.create(payload);
  return result;
};

const getAllJazakallahul = async (filters: any) => {
  const result = await Jazakallahul.find(filters);
  return result;
};

const getSingleJazakallahul = async (id: string) => {
  const result = await Jazakallahul.findById(id);
  return result;
};

const updateJazakallahul = async (id: string, payload: Partial<IJazakallahul>) => {
  const result = await Jazakallahul.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteJazakallahul = async (id: string) => {
  const result = await Jazakallahul.findByIdAndDelete(id);
  return result;
};

export const jazakallahulService = {
  createJazakallahul,
  getAllJazakallahul,
  getSingleJazakallahul,
  updateJazakallahul,
  deleteJazakallahul,
};
