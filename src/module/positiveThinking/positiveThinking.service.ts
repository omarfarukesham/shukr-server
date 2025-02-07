import PositiveThinking from './positiveThinking.model';
import { IPositiveThinking } from './positiveThinking.model';

const createPositiveThinking = async (payload: IPositiveThinking) => {
  const result = await PositiveThinking.create(payload);
  return result;
};

const getAllPositiveThinkings = async (filters: any) => {
  const result = await PositiveThinking.find(filters);
  return result;
};

const getSinglePositiveThinking = async (id: string) => {
  const result = await PositiveThinking.findById(id);
  return result;
};

const updatePositiveThinking = async (id: string, payload: Partial<IPositiveThinking>) => {
  const result = await PositiveThinking.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deletePositiveThinking = async (id: string) => {
  const result = await PositiveThinking.findByIdAndDelete(id);
  return result;
};

export const positiveThinkingService = {
  createPositiveThinking,
  getAllPositiveThinkings,
  getSinglePositiveThinking,
  updatePositiveThinking,
  deletePositiveThinking,
};
