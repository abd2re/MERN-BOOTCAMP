const cities = ["mtl", "otw", "tor"];
cities.push("van");
const [first, ...rest] = cities;

console.log(rest);
console.log(first);

// send everything but password

User = {
  name: "abd",
  email: "abtest@vscode.com",
  password: "lebronjames",
};

const { password, ...rest2 } = User;

console.log(rest2);
