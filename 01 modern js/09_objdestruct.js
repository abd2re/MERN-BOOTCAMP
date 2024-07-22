const thingsToDo = {
  morning: "Exercise",
  afternoon: "Work",
  evening: "Code",
  night: ["Sleep", "Dream"],
};

const { morning, night } = thingsToDo;

console.log(morning);
// ^ same thing as :
console.log(thingsToDo.morning);
console.log(night);

//

const uniStudents = ({ fname, lname }) => {
  // let { fname, lname } = student;
  console.log(`${fname} ${lname} is from waterloo`);
};

uniStudents({
  fname: "Abd",
  lname: "2re",
});
