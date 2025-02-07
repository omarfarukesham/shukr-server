import express from 'express';
import { shukrPostController } from './shukrPost.controller';

const router = express.Router();

router.post('/', shukrPostController.createShukrPost);
router.get('/', shukrPostController.getAllShukrPosts);
router.get('/:id', shukrPostController.getShukrPostById);
router.patch('/:id', shukrPostController.updateShukrPost);
router.delete('/:id', shukrPostController.deleteShukrPost);

export const shukrPostRouter = router;
