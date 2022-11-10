const formField = document.querySelector("#contactForm");
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.classList.add("button");
submitButton.innerText = "submit message";

formField.appendChild(submitButton);

function handleOnSubmit() {
  const userNameValue = document.querySelector("input[name='userName']").value;
  const userEmailValue = document.querySelector(
    "input[name='userEmail']"
  ).value;
  const userMessageValue = document.querySelector(
    "input[name='userMessage']"
  ).value;
  const userNotRobotValue = document.querySelector(
    "input[name='userNotRobot']"
  ).value;

  const alertMessage = `
  your have entered the following information:
  name: ${userNameValue}
  email: ${userEmailValue}
  message: ${userMessageValue}
  is this correct?
  `;
}

submitButton.onSubmit = handleOnSubmit;
