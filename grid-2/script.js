const positions = [
  { top: "0%", left: "10%" },
  { top: "70%", left: "10%" },
  { top: "0", left: "80%" },
  { top: "66%", left: "45%" },
  { top: "60%", left: "60%" },
  { top: "24%", left: "50%" },
];

const imgs = document.querySelectorAll(".img");

gsap.set(".img", {
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%) scale(0)",
});

gsap.to(".img", {
  scale: 1,
  width: "300px",
  height: "400px",
  stagger: 0.15,
  duration: 0.75,
  ease: "power4.inOut",
  delay: 1,
  onComplete: scatterAndShrink,
});

function scatterAndShrink() {
  gsap.to(Array.from(imgs).slice(0, positions.length), {
    top: (i) => positions[i].top,
    left: (i) => positions[i].left,
    transform: "none",
    width: "100px",
    height: "120px",
    duration: 0.075,
    stagger: 0.075,
    ease: "power2.out",
  });
}
