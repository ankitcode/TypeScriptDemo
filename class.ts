class Employee {
  #id!: number; // private id
  protected name!: string;
  address!: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let john = new Employee(1, "John", "highway 11");

Employee.getEmployeeCount();

let address = john.getNameWithAddress();

console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());
