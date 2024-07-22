const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

console.log({ ...obj1, ...obj2 });
