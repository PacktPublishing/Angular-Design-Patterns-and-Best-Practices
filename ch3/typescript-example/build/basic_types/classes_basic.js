"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_class = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Math.floor(Math.random() * 1000);
    }
    toString() {
        return `Name:${this.name} Age:${this.age} ID: ${this.id}`;
    }
}
class Client extends Person {
    constructor(name, age, address) {
        super(name, age);
        this.address = address;
    }
    toString() {
        return `${super.toString()} Address: ${this.address}`;
    }
}
function basic_class() {
    let client = new Client("Mario", 7, 'Europe Avenue');
    console.log(client.toString());
}
exports.basic_class = basic_class;
