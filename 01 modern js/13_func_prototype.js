// old way 🤮

function Holiday(destination, days) {
  this.destination = destination;
  this.days = days;
  this.info = function () {
    return `${this.destination} | ${this.days}`;
  };
}

const nepal = new Holiday("dkr", 30);

console.log(nepal.info());

// this works to with prototype

Holiday.prototype.info2 = function () {
  return `${this.destination} | ${this.days}`;
};

console.log(nepal.info2());
