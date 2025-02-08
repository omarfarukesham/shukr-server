import express from 'express';
import { dailyDuaController } from './dailyDua.controller';

const router = express.Router();

router.post('/', dailyDuaController.createDua);
router.get('/', dailyDuaController.getAllDuas);
router.get('/:id', dailyDuaController.getDuaById);
router.put('/:id', dailyDuaController.updateDua);
router.delete('/:id', dailyDuaController.deleteDua);

export const dailyDuaRouter = router;
