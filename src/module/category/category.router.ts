import express from 'express';
import{ createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory, getAllByCategoryType }  from './category.controller';

const categoryRouqter = express.Router();

categoryRouqter.post('/', createCategory);
categoryRouqter.get('/', getAllByCategoryType);  
categoryRouqter.get('/all', getAllCategories);  
categoryRouqter.get('/:id', getCategoryById);
categoryRouqter.patch('/:id', updateCategory);
categoryRouqter.delete('/:id', deleteCategory);

export default categoryRouqter;
