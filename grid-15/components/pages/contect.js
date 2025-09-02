"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useRef } from "react";
import { TransitionContext } from "../../app/Transitioncontext";

export default function Contect() {
  const image = useRef();
  const container = useRef();
  const { timeline } = useContext(TransitionContext);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["p", image.current]);
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.25 }
      );
      if (timeline) timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );
  return (
    <div ref={container} className="h-[200vh] flex">
      <div className="h-[100vh] flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">Home</p>
        <p className="max-w-[50%] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          mollis elit. Nulla facilisi. Phasellus ac pulvinar ante. Morbi maximus
          feugiat sapien nec cursus. Phasellus in ornare elit. Suspendisse
          viverra porta dui et efficitur. Sed ut rhoncus nibh. Cras eleifend
          tellus a enim sodales, a efficitur odio euismod. Aenean non consequat
          lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Fusce quis eleifend ipsum, sit amet posuere ligula.
        </p>
        <p className="max-w-[50%] text-center">
          Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur
          odio euismod. Aenean non consequat lectus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet
          posuere ligula.
        </p>
        <div ref={image} className="relative w-[50%] h-[40vh]">
          <Image
            src="/img.png"
            width={600}
            height={600}
            alt="img"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
