class Person {
  name: string;
  age: number;
  private id: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = Math.floor(Math.random() * 1000);
  }

  toString() {
    return `Name:${this.name} Age:${this.age} ID: ${this.id}`;
  }
}

class Client extends Person {
  address: string;

  constructor(name: string, age: number, address: string) {
    super(name, age);
    this.address = address;
  }

  toString(): string {
    return `${super.toString()} Address: ${this.address}`;
  }
}

export function basic_class() {
  let client: Client = new Client("Mario", 7, 'Europe Avenue');
  console.log(client.toString());
}
