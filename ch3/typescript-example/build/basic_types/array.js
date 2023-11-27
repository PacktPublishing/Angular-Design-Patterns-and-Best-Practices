"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array_example = void 0;
function array_example() {
    let names;
    let surnames;
    names = ["Mario", "Gabriel", "Lucy"];
    surnames = ["Camillo", "Smith"];
    names.forEach((name) => console.log(`Name:${name}`));
    surnames.forEach((surname) => console.log(`Surname:${surname}`));
}
exports.array_example = array_example;
