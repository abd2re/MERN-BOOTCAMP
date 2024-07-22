const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort((a, b) => {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(Object.entries(cars));

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((value = NaN, index, array) =>
  index < numbers1.length - 1 ? array[index] + array[index + 1] : array[index]
);

console.log(numbers2);
