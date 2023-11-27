import { Collection, Item } from '../../utils/interfaces/collection.interface';

export type Users = Array<User>;
export interface User extends Item {
  username?: string;
  password?: string;
  name?: string;
}

export interface UsersAPI extends Collection {
  items: Users;
}
