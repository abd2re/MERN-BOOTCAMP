class Holiday {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }
  info() {
    return `${this.destination} will take ${this.days} days.`;
  }

  read_info() {
    console.log(this.info());
  }
}

class Expedition extends Holiday {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }
}
