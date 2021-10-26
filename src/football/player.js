const Person = require('./person');

class Player extends Person {
  #_strongLeg;
  #_position;
  #_celebrationSentance;
  constructor(
    firstName,
    surName,
    salary,
    age,
    strongLeg,
    position,
    celebrationSentance
  ) {
    super(firstName, surName, salary, age);
    this.#_strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentance = celebrationSentance;
  }

  set position(pos) {
    this.#_position = pos;
  }

  set celebrationSentance(sentance) {
    this.#_celebrationSentance = sentance;
  }

  get strongLeg() {
    return this.#_strongLeg;
  }

  get position() {
    return this.#_position;
  }

  get celebrationSentance() {
    return this.#_celebrationSentance;
  }

  goalCelebration() {
    console.log(this.celebrationSentance);
    this.salary = this.salary * 1.025;
  }

  getDetails() {
    let details = super.getDetails();
    details += `\nStrong Leg: ${this.strongLeg}\nPosition: ${this.position}\nCelebration: ${this.celebrationSentance}`;
    return details;
  }
}

module.exports = Player;
