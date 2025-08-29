"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import data from "../Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const Cardref = useRef(null);
  const Container = useRef(null);

  useLayoutEffect(() => {
    const container = Container.current;
    const cards = document.querySelectorAll(".image-grid_item");
    gsap.set(cards, { marginTop: "100%" });
    const totalCards = cards.length;
    const randomStaggers = gsap.utils.shuffle(
      Array.from({ length: totalCards }, (_, i) => i * 0.05)
    );

    if (container && cards) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=600%",
          scrub: true,
          pin: true,
        },
      });
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            marginTop: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          randomStaggers[i]
        );
      });
    }
  }, []);

  return (
    <div className="relative h-screen">
      <div
        ref={Container}
        className="photo-grid_section h-screen px-8 py-16 relative bg-white"
      >
        <div className="lists h-full flex justify-start items-stretch gap-[1rem] sticky top-0 w-full">
          {data.map((item, i) => (
            <div className="image-grid_item relative mt-[100%]">
              <Image
                priority
                ref={Cardref}
                key={item.index}
                width={400}
                height={400}
                src={item.img}
                alt={item.alt}
                className="w-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-around items-center text-black pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bottom-0 right-0 z-[-1]">
          <h1 className="text-[2rem]  font-[400]">Stewart & Partners</h1>
          <p className="text-1xl  flex flex-col justify-start ">
            Feature Work <span className="w-full text-sm">10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
