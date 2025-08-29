import data from "./data.js";
const gallery = document.querySelector(".gallery");
const itemspositions = [
  { top: "10%", left: "5%" },
  { top: "4%", left: "35%" },
  { top: "65%", left: "55%" },
  { top: "60%", left: "15%" },
  { top: "60%", left: "80%" },
  { top: "10%", left: "75%" },
];

data.forEach((ele, idx) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const position = itemspositions[idx];
  item.style.top = position.top;
  item.style.left = position.left;

  const img = document.createElement("img");
  img.src = ele.img;
  item.appendChild(img);

  const link = document.createElement("div");
  link.classList.add("link");
  link.innerHTML = `<a href=${ele.link}>${ele.icon}</a>`;
  item.appendChild(link);

  gallery.appendChild(item);
});

document.addEventListener("mousemove", (e) => {
  gallery.querySelectorAll(".item").forEach((item, i) => {
    const animationFactor = data[i].parallaxSpeed;

    const x = (e.clientX - window.innerWidth / 2) * animationFactor;
    const y = (e.clientY - window.innerHeight / 2) * animationFactor;

    gsap.to(item, {
      x,
      y,
      duration: 0.75,
    });
  });
});

let container = document.querySelector(".section_1");
let contextText = document.querySelector(".content_1");
let mainContext = document.querySelector(".main-content_2");

const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
  },
});

gsap.to("[data-travel]", {
  transform: "translate(-50%, -50%) translate(-0.177px, -12rem)",
  opacity: 0,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".section_1",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  },
});
gasp.to(mainContext, {
  y: "0",
  yPercent: "0",
  opacity: 1,
  ease: "power4.inOut",
});
