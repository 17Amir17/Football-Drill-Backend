const Person = require('./person');

class GoalKeeper extends Person {
  #_isLeftHanded;
  #_lastGoalConceded;
  constructor(
    firstName,
    surName,
    salary,
    age,
    isLeftHander,
    lastGoalConceded = new Date()
  ) {
    super(firstName, surName, salary, age);
    this.#_isLeftHanded = isLeftHander;
    this.lastGoalConceded = lastGoalConceded;
  }

  set lastGoalConceded(date) {
    if (date instanceof Date) this.#_lastGoalConceded = date;
    else throw `{date} is not a Date`;
  }

  get lastGoalConceded() {
    return this.#_lastGoalConceded;
  }

  get isLeftHanded() {
    return this.#_isLeftHanded;
  }

  concededAGoal() {
    this.lastGoalConceded = new Date();
    this.salary = this.salary * 0.975;
  }

  getDetails() {
    let details = super.getDetails();
    details += `\nLeft Handed ${this.isLeftHanded}\nLast Goal: ${this.lastGoalConceded}`;
    return details;
  }
}

module.exports = GoalKeeper;
