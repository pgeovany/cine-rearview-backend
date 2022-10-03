import { Router } from 'express';
import authRouter from './authRouter';
import filmsRouter from './filmsRouter';

const router = Router();
router.use('/auth', authRouter);
router.use('/films', filmsRouter);

export default router;
