// Primitives : number, string, boolean
// More Complex types: arrays, objects
// Function types, parameters
// Primitives
var age = 24;
var userName; // type in lowerCase
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["fishing", "Cooking"];
var person;
person = {
    name: "Park",
    age: 32
};
var people;
// type inference
var course = "React - The Complete Guide"; // Type을 지정하지 않아도 추론해냄.
// 가능하다면 타입 추론을 사용할 것.
// union type을 써서 string 뿐 아니라 number도 할당 가능하게 함.
course = 1234;
// Functions & types
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
