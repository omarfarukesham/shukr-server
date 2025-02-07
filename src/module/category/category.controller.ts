import { Request, Response, NextFunction } from 'express';
import * as categoryService from './category.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';


/**
 * Creates a new category
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 *
 * @returns {Promise<void>}
 */

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await categoryService.createCategory(req.body);
    res.status(201).json({ message: 'Category created successfully', data: result });
  } catch (error) {
    next(error);
  }
};

export const getAllByCategoryType = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query)
    try {
      const { type } = req.query;
      if (!type || typeof type !== 'string') {
        res.status(400).json({ message: 'Type query parameter is required and must be a string' });
        return;
      }
      const result = await categoryService.getAllCategoryType(type);
      res.status(200).json({ message: 'Categories retrieved successfully', data: result });
    } catch (error) {
      next(error);
    }
  };
export const getAllCategories = async (req: Request, res: Response) => {
    const result = await categoryService.getAllCategories();

    sendResponse(res, {
       statusCode: StatusCodes.OK,
         message: 'All Categories post retrieved successfully',
         data: result,
    });
   
  };

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await categoryService.getCategoryById(req.params.id);
    if (!result) {
      res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category retrieved successfully', data: result });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await categoryService.updateCategory(req.params.id, req.body);
    if (!result) {
      res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category updated successfully', data: result });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await categoryService.deleteCategory(req.params.id);
    if (!result) {
     res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
};
