const Class = {
  code: 207,
  name: "Physics",
  student: {
    grades: [17, 18, 19],
  },
};

const { student } = Class;

student.grades.push(14);

const {
  student: { grades },
} = Class;

grades.push(11);

console.log(
  grades === student.grades && student.grades === Class.student.grades
);
