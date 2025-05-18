// File with type errors
let x: string = "hello";
x = 123; // Error: Type 'number' is not assignable to type 'string'

interface User {
    name: string;
    age: number;
}

// Missing property 'age'
const user: User = {
    name: "John"
};