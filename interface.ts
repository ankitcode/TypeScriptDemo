export interface User {
  name: string;
  age?: number; //makes it optional
  id: number;
  email: string;
}

let user: User = { name: "John", id: 1, email: "" };

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface login {
  //can be used outside the class
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  { name: "John", id: 1, email: "" },
  { name: "John1", id: 2, email: "" },
  { name: "John2", id: 3, email: "" },
  { name: "John3", id: 4, email: "" },
];


console.log(user1);
console.log(user2);
console.log(restUsers);

// let result = restUsers.filter(user => user.id > 3);

//@CompositionEvent({}) // Decorators
class Component {
    constructor (public name: string){}
}