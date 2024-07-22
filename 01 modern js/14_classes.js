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

const trip = new Holiday("Dakar, SN", 15);
trip.read_info();
