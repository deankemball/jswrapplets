const formFields = {
  userName: {
    label: "full name",
    type: "text",
    placeholder: "enter your name",
    options: {},
  },
  userEmail: {
    label: "e-mail address",
    type: "text",
    placeholder: "enter your e-mail",
  },
  userEmail: {
    label: "e-mail address",
    type: "text",
    placeholder: "enter your e-mail",
  },
  userMessage: {
    label: "message",
    type: "text",
    placeholder: "enter your message",
  },
  userNotRobot: {
    label: "are you human?",
    type: "checkbox",
    placeholder: "",
  },
};

const formFieldsEntries = Object.entries(formFields);
const formElement = document.querySelector("#contactForm");

function createContactForm(parent, formFieldsEntries) {
  for (let i = 0; i < formFieldsEntries.length; i++) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    const key = formFieldsEntries[i][0];
    const value = formFieldsEntries[i][1];
    input.name = key;
    label.for = key;
    input.type = value.type;
    input.placeholder = value.placeholder;
    label.innerText = value.label;
    if (value.type === "checkbox") {
      const flexWrapper = document.createElement("div");
      flexWrapper.classList.add(".checkboxWrapper");
      flexWrapper.appendChild(label);
      flexWrapper.appendChild(input);
      parent.appendChild(flexWrapper);
    } else {
      parent.appendChild(label);
      parent.appendChild(input);
    }
  }
}

createContactForm(formElement, formFieldsEntries);
