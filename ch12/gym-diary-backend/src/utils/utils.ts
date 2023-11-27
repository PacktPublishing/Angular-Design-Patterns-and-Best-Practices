import { Collection, Item, Items } from './interfaces/collection.interface';

export function paginate(items: Items, page = 1, pageSize?: number): Items {
  if (pageSize) {
    return items.slice((page - 1) * pageSize, page * pageSize);
  }

  return items;
}

function filterByAll(label: string, items: Items) {
  const filter = label.toLowerCase().trim();

  return items.filter((item) => {
    const findByProperty = (property: string): any => {
      return (
        typeof item[property] === 'string' &&
        item[property].toLowerCase().includes(filter)
      );
    };

    return Object.keys(item).some(findByProperty);
  });
}

export function getItem(id: string, items: Items): Item {
  return items.find((item) => item.id === id);
}

export function getCollection(
  items: Items,
  search?: string,
  page?: string,
  pageSize?: string,
  reverse?: boolean,
): Collection {
  let filteredItems = filter(items, search);
  if (reverse) filteredItems = reverseCollection(filteredItems);

  filteredItems = paginate(
    filteredItems,
    parseInt(page, 10),
    parseInt(pageSize, 10),
  );

  return {
    items: filteredItems,
    hasNext: items.length > parseInt(pageSize, 10) * parseInt(page, 10),
  };
}

function filter(items: Items, search?: string) {
  return search ? filterByAll(search, items) : items;
}

function reverseCollection(items: Items) {
  return [...items].reverse();
}
