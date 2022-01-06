import ICreateDrink from '../dtos/ICreateDrink';
import Drink from '../infra/typeorm/entities/Drink';

export default interface IDrinksRepository {
  create(data: ICreateDrink): Promise<Drink>;
  findByTitle(title: string): Promise<Drink | undefined>;
  findAll(): Promise<Drink[]>;
}
