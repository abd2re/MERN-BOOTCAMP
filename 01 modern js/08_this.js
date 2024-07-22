function sayHi() {
  console.log(this);
}

sayHi();

let canada = {
  cities: ["ottawa", "montreal", "vancouver", "ottawa"],
  printCities: function () {
    console.log(this.cities.join(" - "));
  },
};

canada.printCities();

// this keyword only works with functions and not arrow functions
