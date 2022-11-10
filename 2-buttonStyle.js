const navButtons = document.querySelectorAll("#navUl > li");

function styleNavButtons(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("button");
  }
}

styleNavButtons(navButtons);
