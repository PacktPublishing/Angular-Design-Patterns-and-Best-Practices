import { Collection, Item } from '../../utils/interfaces/collection.interface';

export type Diaries = Array<Diary>;
export interface Diary extends Item {
  date?: string;
  exercise?: string;
  sets?: number;
  reps?: number;
}

export interface DiariesAPI extends Collection {
  items: Diaries;
}
