import { container } from 'tsyringe';

import DrinksRepository from '@modules/drinks/infra/typeorm/repositories/DrinksRepository';
import IDrinksRepository from '@modules/drinks/repositories/IDrinksRepository';

import './providers';

container.registerSingleton<IDrinksRepository>(
  'DrinksRepository',
  DrinksRepository,
);
