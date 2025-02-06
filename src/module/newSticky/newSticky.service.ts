import QueryBuilder from "../../builder/querybuilder";
import NewSticky from "./newSticky.model";
import { INewsticky } from "./newSticky.interface";

const createSticky = async (payload: INewsticky): Promise<INewsticky> => {
  const result = await NewSticky.create(payload);
  return result;
};

const getStickies = async (query: Record<string, unknown>) => {
  const result = await NewSticky.find()
  return result
};

const getSingleSticky = async (id: string): Promise<INewsticky | null> => {
  const result = await NewSticky.findById(id)
  return result;
};

const updateSticky = async (id: string, data: Partial<INewsticky>): Promise<INewsticky | null> => {
  const result = await NewSticky.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  return result;
};

const deleteSticky = async (id: string): Promise<INewsticky | null> => {
  const result = await NewSticky.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Sticky not found or could not be deleted");
  }
  return result;
};

export const newStickyService = {
  createSticky,
  getStickies,
  getSingleSticky,
  updateSticky,
  deleteSticky,
};
