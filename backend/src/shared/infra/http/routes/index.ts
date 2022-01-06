import drinksRouter from '@modules/drinks/infra/http/routes/drinks.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/drinks', drinksRouter);

export default routes;
