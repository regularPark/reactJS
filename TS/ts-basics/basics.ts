// Primitives : number, string, boolean
// More Complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

let userName: string; // type in lowerCase

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["fishing", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: {
  name: string;
  age: number;
};

person = {
  name: "Park",
  age: 32,
};

let people: Person[];

// type inference
let course: string | number = "React - The Complete Guide"; // Type을 지정하지 않아도 추론해냄.

// 가능하다면 타입 추론을 사용할 것.

// union type을 써서 string 뿐 아니라 number도 할당 가능하게 함.
course = 1234;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(arr: T[], val: T) {
  const newArr = [val, ...arr];
  return newArr;
}

const demoArr = [1, 2, 3];

const updateArr = insertAtBeginning(demoArr, -1);
const stringArr = insertAtBeginning(["a", "b", "c"], "d");

// updateArr[0].split("");
stringArr[0].split("");
