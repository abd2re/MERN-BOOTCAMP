const person = {
  name: "abd",
  id: 1343,
  age: 18,
  get_info: function () {
    return this.name + this.id + this.age;
  },
};

console.log(person.get_info());
