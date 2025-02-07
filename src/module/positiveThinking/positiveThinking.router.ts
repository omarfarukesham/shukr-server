import express from 'express';
import { positiveThinkingController } from './positiveThinking.controller';

const router = express.Router();

router.post('/', positiveThinkingController.createPositiveThinking);
router.get('/', positiveThinkingController.getAllPositiveThinkings);
router.get('/:id', positiveThinkingController.getPositiveThinkingById);
router.patch('/:id', positiveThinkingController.updatePositiveThinking);
router.delete('/:id', positiveThinkingController.deletePositiveThinking);

export const positiveThinkingRouter = router;
