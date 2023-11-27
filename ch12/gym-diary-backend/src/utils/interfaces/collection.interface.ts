export interface Collection {
  hasNext?: boolean;
  items: Items;
}

export interface Item {
  id?: string;
}

export type Items = Array<Item>;
