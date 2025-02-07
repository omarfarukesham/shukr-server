import express from 'express';
import { jazakallahulController } from './jazakallahul.controller';

const router = express.Router();

router.post('/', jazakallahulController.createJazakallahul);
router.get('/', jazakallahulController.getAllJazakallahul);
router.get('/:id', jazakallahulController.getJazakallahulById);
router.patch('/:id', jazakallahulController.updateJazakallahul);
router.delete('/:id', jazakallahulController.deleteJazakallahul);

export const jazakallahulRouter = router;
