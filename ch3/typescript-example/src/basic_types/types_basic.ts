type ID = string | number;

type Machine = {
  id: ID;
  description: string;
  energyOutput: number;
};

export function basic_type() {
  let car: Machine = {
    id: 123,
    description: "Car",
    energyOutput: 1000,
  };

  console.log(
    `ID:${car.id} Description:${car.description} Energy Output:${car.energyOutput} `
  );
}




