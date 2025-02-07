import express from 'express';
import { natureBeautyController } from './natureBeauty.controller';

const router = express.Router();

router.post('/', natureBeautyController.createNatureBeauty);
router.get('/', natureBeautyController.getAllNatureBeauties);
router.get('/:id', natureBeautyController.getNatureBeautyById);
router.patch('/:id', natureBeautyController.updateNatureBeauty);
router.delete('/:id', natureBeautyController.deleteNatureBeauty);

export const natureBeautyRouter = router;
