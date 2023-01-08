const imgs = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

const random = imgs[Math.floor(Math.random()*imgs.length)];
const bgImgs = document.createElement("img");

bgImgs.src = `img/${random}`;
document.body.appendChild(bgImgs); //bgImgs가 html의 img 태그와도 같음!


