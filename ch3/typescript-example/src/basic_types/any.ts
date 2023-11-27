export function any_example() {
  let information: any;

  information = "Mario";

  console.log(`Name: ${information}`);

  information = 7;

  console.log(`Age: ${information}`);
}

interface Products {
  id: number;
  description: string;
}

type ListOfProducts = Array<Products>;

const exampleList: ListOfProducts = [
  { id: 1, description: "banana" },
  { id: 2, description: "apple" },
  { id: 3, description: "pear" },
];

function getProductById(id: unknown) {
  if (typeof id === 'string'){
    id = parseInt(id);
  } else if (typeof id !== 'number'){
    return
  }

  return exampleList.find((product) => product.id === id);
}

export function getProductTest() {
  const id = '2';
  const item = getProductById(id);
  if (item !== undefined) {
    console.log(`ID:${item.id} Description:${item.description}`);
  } else {
    console.log("No product found");
  }
}
