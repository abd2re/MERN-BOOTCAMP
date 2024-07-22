let fname = "abd";
let lname = "toure";
const realAge = 18;

let age = 18;

console.log(age !== realAge);

function ask_age(prompt_message) {
  let age = prompt(prompt_message);
  if (age != realAge) {
    ask_age("Wrong, guess age again");
  } else {
    let result = `${fname}'s age is ${realAge} !!`;
    alert(result);
  }
}

ask_age("Guess age");
