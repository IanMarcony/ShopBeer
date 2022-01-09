import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';
import Drink from '../infra/typeorm/entities/Drink';
import IDrinksRepository from '../repositories/IDrinksRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  title: string;
  description: string;
  value: number;
  image_url: string;
}

@injectable()
export default class CreateDrinkService {
  constructor(
    @inject('DrinksRepository')
    private drinksRepository: IDrinksRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    title,
    description,
    value,
    image_url,
  }: IRequest): Promise<Drink> {
    const existsDrinkWithSameTitle = await this.drinksRepository.findByTitle(
      title,
    );
    if (existsDrinkWithSameTitle) {
      const filename = image_url.split('/')[2];
      this.storageProvider.deleteFile(filename);
      throw new AppError('Cannot create drink with same title');
    }
    const drink = await this.drinksRepository.create({
      title,
      description,
      value,
      image_url,
    });

    return drink;
  }
}
