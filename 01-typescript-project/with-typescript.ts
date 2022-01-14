function add(a: number, b: number): number {
  return a + b;
}

function printf(value: any): void {
  console.log(value);
}

const result: number = add(2, 5);

printf(result);

let people: { name: string; age: number }[];

people = [{ name: "Burak", age: 38 }];

printf(people);

let variable: string | number = "String";

variable = 123;

printf(variable);

type Human = { name: string; age: number };

const peoples: Human[] = [];

peoples.push({ name: "Burak", age: 38 });

printf(peoples);

function insert<T>(array: T[], value: T) {
  return [value, ...array];
}

const arr = insert<number>([1, 2], 0);

printf(arr);
