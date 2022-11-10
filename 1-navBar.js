const navLinks = ["home", "about", "contact", "shop"];

const navUl = document.querySelector("#navUl");

function createNavLinks(parent, links) {
  parent.innerText = "";
  for (let i = 0; i < links.length; i++) {
    const linkButton = document.createElement("li");
    linkButton.id = links[i];
    linkButton.innerText = links[i];
    parent.appendChild(linkButton);
  }
}
createNavLinks(navUl, navLinks);
