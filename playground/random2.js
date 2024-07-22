function generatePassword() {
  return "password";
}

class User {
  constructor({ username, password }) {
    this.username = username || "Guest";
    this.password = password || generatePassword();
  }

  getUserData() {
    const { password, ...userData } = this;
    return userData;
  }
}

class Student extends User {
  constructor({ username, password, grade }) {
    super(username, password);
    this.grade = grade || "Graduated";
  }

  getUserData() {
    super.getUserData();
  }
}

json_data = {
  username: "abd2re",
  age: 18,
  grade: "12th grade",
  password: "256hashppwwx",
};
