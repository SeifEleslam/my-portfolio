import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Info } from "./AboutSections";

export default function About({ state }: { state: string }) {
  const [ref, inView, entry] = useInView();
  return (
    <Element
      name="about"
      id="about"
      className="relative overflow-hidden w-full h-full"
    >
      <div
        ref={ref}
        className={
          (inView ? " animate-zoom shadow-3xl " : " opacity-0 ") +
          " relative  origin-left z-[100] mt-[12vh] mx-auto md:ml-[10vw] md:w-2/3 w-[95%] h-2/3 h-[80%] duration-500"
        }
      >
        <div
          className={
            "z-[101] absolute w-[10rem] p-2 h-[10rem] -bottom-[5rem] inset-x-0 mx-auto overflow-hidden"
          }
        >
          <div className={inView ? "animate-showup " : " "}>
            <Info />
          </div>
        </div>
        <div className="w-full h-full text-[#aaa] bg-[#272b33] ">
          <div
            className={`${
              inView ? "animate-slideright" : ""
            } right-0 w-[0] h-full absolute bg-[#d8b15d]`}
          >
            <div
              className={`${
                inView ? "animate-hesitate" : ""
              } h-full ml-0 w-[0%] bg-[#282c34] `}
            ></div>
          </div>
          <h1 className="mb-4 text-shadow py-2 text-[2rem] bg-[#d8b15d] text-[#eee] text-center">
            About Me
          </h1>
          <div className="p-[1vw] text-left w-full">
            <p className="text-[#555] text-[4vh]  ">
              Hello,
              <br />
              This is SEIFELESLAM
              <br />I am a passionate web designer, who seeks perfection and
              give a lot of attention to details.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
