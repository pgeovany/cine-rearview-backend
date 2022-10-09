import { Router } from 'express';
import authRouter from './authRouter';
import filmsRouter from './filmsRouter';
import reviewsRouter from './reviewsRouter';
import userFilmsRouter from './userFilmsRouter';
import watchlistsRouter from './watchlistsRouter';

const router = Router();
router.use('/auth', authRouter);
router.use('/films', filmsRouter);
router.use(userFilmsRouter);
router.use(watchlistsRouter);
router.use(reviewsRouter);

export default router;
