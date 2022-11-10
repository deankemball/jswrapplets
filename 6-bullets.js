const trigger = document.createElement("button");
trigger.classList.add("button");
trigger.innerText = "click me";

const body = document.querySelector("body");
body.appendChild(trigger);

function createBulletHole(event) {
  event.preventDefault();
  const gunshot = new Audio("/sounds/gunshot.mp3");
  gunshot.play();

  const bulletHole = document.createElement("div");
  bulletHole.classList.add("bulletHole");

  const positionX = Math.random() * window.innerWidth;
  const positionY = Math.random() * window.innerHeight;

  console.log(positionX, positionY);
  bulletHole.style.left = `${positionX}px`;
  bulletHole.style.top = `${positionY}px`;

  const glass = new Audio("/sounds/bulletOnGlass.mp3");
  const shells = new Audio("/sounds/shellsOnGround.mp3");

  body.appendChild(bulletHole);
  glass.play();
  shells.play();
}

trigger.onclick = (event) => createBulletHole(event);
