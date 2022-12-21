import { login, User } from "./interface";
//import * as Userlogin from './interface'; //can be used as Userlogin.login

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements login {
  #id!: number; // private id
  protected name!: string;
  address!: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }
  login(): User {
    return { name: "John", id: 1, email: "" };
  }
  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
}

let john = new Employee(1, "John", {
  street: "new sama",
  city: "vadodara",
  state: "gujarat",
  pin: "390008",
});

Employee.getEmployeeCount();

let address = john.getNameWithAddress();

console.log(address);

let mike = new Manager(2, "Mike", {
  street: "new sama",
  city: "vadodara",
  state: "gujarat",
  pin: "390008",
});

console.log(mike.getNameWithAddress());
