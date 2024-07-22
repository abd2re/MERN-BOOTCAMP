// for a const object, its properties can change

// const obj = {} or const obj = new Object()

// const obj = new Object();

// object is like a python dict

const obj = {
  name: "ibra",
  age: 12,
  gender: "male",
};

obj["name"] = "abd";

console.log(obj.name);
obj.color = "black";

console.log(obj["color"]);
