const registration = (
  name: string,
  age: number,
  email: string,
  password: string | number
):void => 
registration("Vitalii", 38, "www@.com", "qwerty");

const printHello = (): void => {
  console.log("Hello");
};

printHello();

let user1: {
  name: string;
  age: number;
} = {
  name: "Bob",
  age: 25,
};

let user2: {
  name: string;
  age: number;
} = {
  name: "Bil",
  age: 35,
};
let user3: {
  name: string;
  age: number;
} = {
  name: "Barbara",
  age: 19,
};

let arrayUser: { name: string; age: number; }[] = [];
arrayUser.push(user1,user2,user3)
console.log(arrayUser);
