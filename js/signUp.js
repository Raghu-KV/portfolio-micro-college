const singUpBtn = document.querySelector("#singUpBtn");

const navigate = (param) => {
  window.location.href = param;
};

singUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector("#emailForm");
  const pass = document.querySelector("#passForm");

  //error msg
  const emailErrorMsg = document.querySelector("#emailErrorMsg");
  const passErrorMsg = document.querySelector("#passErrorMsg");

  let isPasswordValid = false;
  let isEmailValid = false;

  if (!email.value) {
    emailErrorMsg.classList.remove("display-none");
  } else {
    isEmailValid = true;
    localStorage.setItem("email", email.value);
    emailErrorMsg.classList.add("display-none");
  }

  if (!pass.value) {
    passErrorMsg.classList.remove("display-none");
  } else if (pass.value.length <= 6) {
    passErrorMsg.classList.remove("display-none");
    passErrorMsg.innerText = "Password should be above 6";
  } else {
    isPasswordValid = true;
    emailErrorMsg.classList.add("display-none");
    localStorage.setItem("password", pass.value);
  }

  if (isPasswordValid && isEmailValid) {
    navigate("./index.html");
  }
});

// singUpBtn.addEventListener("click", ()=>{
//     window.location.href = "./index.html";
// });
