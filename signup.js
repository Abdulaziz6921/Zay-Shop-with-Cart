// SignUp Form _________________________________

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");
const Name = document.querySelector(".name");
let Signup = document.querySelector(".signup");
let signOut = document.querySelector(".sign-out_btn");
let wrapper = document.querySelector(".addition");

const signUp = () => {
  if (
    input1.value === "" ||
    input2.value === "" ||
    input3.value === ""
    // input4.value === "" ||
    // input5.value === ""
  ) {
    alert("Fill in the input");
  } else {
    localStorage.setItem("Name", input1.value);
    localStorage.setItem("Email", input2.value);
    localStorage.setItem("Password", input3.value);
    // localStorage.setItem("Name2", input4.value);
    // localStorage.setItem("Password2", input5.value);
    location.replace("./index.html");
  }
};

const logIn = () => {
  if (input4.value === "" || input5.value === "") {
    alert("Fill in the input");
  } else {
    localStorage.setItem("Name", input4.value);
    localStorage.setItem("Password", input5.value);
    location.replace("./index.html");
  }
};

if (localStorage.getItem("Name")) {
  signOut.style.display = "block";
  Signup.style.display = "none";
  Name.style.display = "flex";
  wrapper.style.width = "250px";
} else {
  signOut.style.display = "none";
  Name.style.display = "none";
}

Name.innerHTML = localStorage.getItem("Name");
Name.className = "user_name";

signOut.addEventListener("click", () => {
  localStorage.clear();
});
