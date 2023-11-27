import { Collection, Item } from '../../utils/interfaces/collection.interface';

export type Exercises = Array<Exercise>;
export interface Exercise extends Item {
  description?: string;
}

export interface ExercisesAPI extends Collection {
  items: Exercises;
}
