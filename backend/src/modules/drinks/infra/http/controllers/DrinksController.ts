import { Response, Request } from 'express';
import { container } from 'tsyringe';
import CreateDrinkService from '@modules/drinks/services/CreateDrinkService';
import DrinksRepository from '../../typeorm/repositories/DrinksRepository';

export default class DrinksController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createDrinkService = container.resolve(CreateDrinkService);
    const { title, description, value } = req.body;
    const image_url = '/files/' + req.file?.filename;
    const drink = await createDrinkService.execute({
      title,
      description,
      value,
      image_url,
    });
    return res.status(201).json(drink);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const drinksRepository = new DrinksRepository();
    const drinks = await drinksRepository.findAll();
    return res.status(200).json(drinks);
  }
}
