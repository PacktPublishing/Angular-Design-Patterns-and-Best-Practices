export function array_example() {
  let names: Array<string>;
  let surnames: string[];

  names = ["Mario", "Gabriel", "Lucy"];
  surnames = ["Camillo", "Smith"];

  names.forEach((name) => console.log(`Name:${name}`));
  surnames.forEach((surname) => console.log(`Surname:${surname}`));
}
