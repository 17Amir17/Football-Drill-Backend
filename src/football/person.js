class Person {
  #id;
  #_firstName;
  #_surName;
  #_salary;
  #_age;
  #_image;
  constructor(firstName, surName, salary, age, image = undefined) {
    this.#_firstName = firstName;
    this.surName = surName;
    this.salary = salary;
    this.age = age;
    this.#id = Person.#getUnusedID();
    this.#_image = image;
  }

  static #idCount = 0;
  static #getUnusedID() {
    this.#idCount += 1;
    return this.#idCount;
  }

  set surName(surName) {
    //A player could get married
    this.#_surName = surName;
  }

  set age(a) {
    if (typeof a === 'number') {
      this.#_age = a;
    } else {
      throw `${a} is not a number`;
    }
  }

  set salary(money) {
    if (typeof money === 'number') {
      this.#_salary = money;
    } else {
      throw `${money} is not a number`;
    }
  }

  get firstName() {
    return this.#_firstName;
  }

  get surName() {
    return this.#_surName;
  }

  get age() {
    return this.#_age;
  }

  get salary() {
    return this.#_salary;
  }

  get image() {
    return this.#_image;
  }

  get id() {
    return this.#id;
  }

  getDetails() {
    return `First Name: ${this.firstName}\nSurname: ${this.surName}\nAge: ${this.age} years old\nSalary: ${this.salary} $`;
  }
}

module.exports = Person;
