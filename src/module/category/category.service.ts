
import { Document } from 'mongoose';
import Category, { ICategory } from './category.model';

type CategoryDocument = ICategory & Document;

export const createCategory = async (data: ICategory): Promise<CategoryDocument> => {
  return await Category.create(data);
};

export const getAllCategoryType = async (type: string): Promise<CategoryDocument[]> => {
  return await Category.find({ type });
};
export const getAllCategories = async (): Promise<CategoryDocument[]> => {
  return await Category.find();
};

export const getCategoryById = async (id: string): Promise<CategoryDocument | null> => {
  return await Category.findById(id);
};

export const updateCategory = async (id: string, data: Partial<ICategory>): Promise<CategoryDocument | null> => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategory = async (id: string): Promise<CategoryDocument | null> => {
  return await Category.findByIdAndDelete(id);
};
