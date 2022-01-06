import ICreateDrink from '@modules/drinks/dtos/ICreateDrink';
import IDrinksRepository from '@modules/drinks/repositories/IDrinksRepository';
import { getRepository, Repository } from 'typeorm';
import Drink from '../entities/Drink';

export default class DrinksRepository implements IDrinksRepository {
  private ormRepository: Repository<Drink>;

  constructor() {
    this.ormRepository = getRepository(Drink);
  }

  async create({
    title,
    value,
    description,
    image_url,
  }: ICreateDrink): Promise<Drink> {
    const drink = this.ormRepository.create({
      title,
      description,
      value,
      image_url,
    });
    console.log(drink.id);
    return await this.ormRepository.save(drink);
  }

  async findByTitle(title: string): Promise<Drink | undefined> {
    const drink = await this.ormRepository.findOne({ where: { title } });
    return drink;
  }

  async findAll(): Promise<Drink[]> {
    return await this.ormRepository.find();
  }
}
