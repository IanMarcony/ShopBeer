import { Router } from 'express';
import DrinksController from '../controllers/DrinksController';
import uploadConfig from '@config/upload';
import multer from 'multer';

const drinksRouter = Router();
const drinksController = new DrinksController();
const upload = multer(uploadConfig);

drinksRouter.get('/', drinksController.index);
drinksRouter.post('/', upload.single('image'), drinksController.create);

export default drinksRouter;
