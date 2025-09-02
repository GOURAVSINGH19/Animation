'use client'
import { useState, useContext } from "react";
import { TransitionContext } from "../app/Transitioncontext";
import { useGSAP } from "@gsap/react";

const Transition = ({ children }) => {
  const [navigate, setnavigate] = useState(children);
  const { timeline } = useContext(TransitionContext);
  const { contextSafe } = useGSAP();

  const exit = contextSafe(() => {
    timeline.play().then(() => {
      window.scrollTo(0, 0);
      setnavigate(children);
      timeline.pause().clear();
    });
  });

  useGSAP(() => {
    if (children.key !== navigate.key) {
      exit();
    }
  }, [children]);
  return <div className="bg-white">{navigate}</div>;
};

export default Transition;
