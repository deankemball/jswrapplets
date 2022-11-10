const shopData = [
  {
    id: 0,
    title: "keyboard",
    description: "mechanical keyboard",
    price: 200,
    image: "/images/keyboard.jpg",
  },
  {
    id: 0,
    title: "mouse",
    description: "basic mouse",
    price: 30,
    image: "/images/mouse.jpg",
  },
  {
    id: 0,
    title: "battery pack",
    description: "battery pack with two usb outputs",
    price: 25,
    image: "/images/battery-pack.jpg",
  },
  {
    id: 0,
    title: "monitor",
    description: '25" lcd display',
    price: 300,
    image: "/images/monitor.jpg",
  },
  {
    id: 0,
    title: "earphones",
    description: "very cheap earphones",
    price: 12,
    image: "/images/earphones.jpg",
  },
  {
    id: 0,
    title: "usb-c cable",
    description: "times are changing",
    price: 1,
    image: "/images/usb-c.jpg",
  },
];

const shopGrid = document.querySelector("#shopWrapper");

function createShopCards(parent, shopData) {
  for (let i = 0; i < shopData.length; i++) {
    // create the card component
    const card = document.createElement("div");
    card.id = `${card.id}-${card.title}`;
    card.classList.add("shopCard");
    // create image
    const image = document.createElement("img");
    image.src = shopData[i].image;
    image.alt = shopData[i].description;
    image.classList.add("cardImage");
    // create the title-price div
    const titlePriceBlock = document.createElement("div");
    titlePriceBlock.classList.add("titlePrice");
    // create divs for the title, price, and description
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const description = document.createElement("p");
    description.classList.add("description");
    // add the title, description and price values from the input array
    title.innerText = shopData[i].title;
    price.innerText = `${shopData[i].price} €`;
    description.innerText = shopData[i].description;
    // append everything in reverse order
    card.appendChild(image);
    titlePriceBlock.appendChild(title);
    titlePriceBlock.appendChild(price);
    card.appendChild(titlePriceBlock);
    card.appendChild(description);
    parent.appendChild(card);
  }
}

createShopCards(shopGrid, shopData);
