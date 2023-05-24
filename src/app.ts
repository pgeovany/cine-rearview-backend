import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import router from './routes/router';
import errorHandler from './middlewares/errorHandler';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();
app.use(cors(), json(), helmet(), limiter);
app.use(router);
app.use(errorHandler);

export default app;
