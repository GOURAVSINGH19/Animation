let imgs = [
  {
    src: "../Photo/img.jpeg",
    idx: 1,
  },
  {
    src: "../Photo/img2.jpeg",
    idx: 2,
  },
  {
    src: "../Photo/img3.jpeg",
    idx: 3,
  },
  {
    src: "../Photo/img4.jpeg",
    idx: 4,
  },
  {
    src: "../Photo/img5.jpeg",
    idx: 5,
  },
  {
    src: "../Photo/img6.jpeg",
    idx: 6,
  },
];

const imglayout = document.querySelector(".img_layout");
const cname = document.querySelector(".c_name");
const percent = document.querySelector(".c_percent");

imgs.map((ele, i) => {
  const item = document.createElement("div");
  item.classList.add("u_img");
  const img = document.createElement("img");
  img.src = ele.src;
  item.appendChild(img);

  imglayout.appendChild(item);
});

let count = 0;
let interval = setInterval(() => {
  if (count > 100) {
    clearInterval(interval);
    return;
  }
  percent.innerHTML = count;
  count++;
}, 40);

let current = 0;

const initialestate = () => {
  gsap.set(imglayout, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    duration: 1.2,
    ease: "power4.inOut",
  });

  gsap.set([cname, percent], {
    y: 10,
    yPercent: 200,
    opacity: 0,
    duration: 1.2,
    ease: "power4.inOut",
  });
};

const allimgs = [...document.querySelectorAll(".u_img")];
const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4.inOut",
  },
});

tl.to(
  [cname, percent],
  {
    y: 0,
    yPercent: 0,
    opacity: 1,
    stagger: {
      amount: 0.2,
    },
    onUpdate: reClose,
  },
  "a"
).to(
  imglayout,
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    opacity: 1,
    ease: "power4.inOut",
  },
  "a"
);
allimgs.forEach((img, index) => {
  tl.to(
    img,
    {
      opacity: 1,
      duration: 0.8,
      ease: "power4.inOut",
    },
    "-=2"
  );
  tl.to(img[index - 1], {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onUpdate: function () {
      gsap.to(img, {
        opacity: 0,
        duration: .1,
        ease:"bounce.inOut",
      });
    },
  });
});

function reClose() {
  tl.to(
    imglayout,
    {
      duration: 1,
      ease: "power2.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    },
    "-=2"
  )
    .to(
      [cname, percent],
      {
        y: -10,
        yPercent: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "-=1.7"
    )
    .to(
      ".loader_wrap",
      {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=1.7"
    );
}

initialestate();
tl.play();
