import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import uploadConfig from '@config/upload';
import AppError from '@shared/error/AppError';
import routes from './routes';
import '@shared/container';
import '../typeorm/database';

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.tmpFolder));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  console.log(err);
  return res.status(500).json({ status: 'error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT = ${PORT} ! 🤖`);
});
