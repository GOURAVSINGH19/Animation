"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useRef } from "react";

const TransitionContext = createContext({ timeline: gsap.timeline() });

const TransitionProvider = ({ children }) => {
  const timeline = useRef();
  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });
  });
  return (
    <TransitionContext.Provider value={{ timeline: timeline.current }}>
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
