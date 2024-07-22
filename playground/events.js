// document.querySelector("html").addEventListener("click", () => alert("Hello"));

const myImage = document.querySelector("img");

const src1 =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg";
const src2 = "https://d2zp5xs5cp8zlg.cloudfront.net/image-32399-800.jpg";

myImage.setAttribute("src", src1);

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === src1) {
    myImage.setAttribute("src", src2);
  } else {
    myImage.setAttribute("src", src1);
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myTitle = document.querySelector("title");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome ${myName}`;
    myTitle.textContent = `${myName} website`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome back, ${storedName}`;
  myTitle.textContent = `${storedName} website`;
}

myButton.onclick = () => {
  setUserName();
};
