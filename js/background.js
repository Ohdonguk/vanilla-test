const images = ["5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"];
const randomIm = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${randomIm}`;
bgImage.classList.add("bg");

document.body.appendChild(bgImage);
