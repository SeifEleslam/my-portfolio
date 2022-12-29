import CoolCircle from "./CoolCircle";
import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function About({ state }: { state: string }) {
  const [ref, inView, entry] = useInView();
  return (
    <Element name="about" id="about" className="overflow-hidden w-full h-full">
      <div className="absolute w-full h-full md:pl-[50vw] z-[0] "></div>

      <div
        ref={ref}
        className={
          (inView ? " animate-zoom shadow-3xl " : " opacity-0 ") +
          " backdrop-blur origin-left z-[100] mt-[12vh] mx-auto md:ml-[10vw] md:w-2/3 w-[95%] md:h-2/3 h-[80%] duration-500"
        }
      >
        <div className="backdrop-opacity-10 backdrop-invert-[1] w-full h-full text-[#aaa] bg-[#272b33]/80 ">
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
          <div className="bg-[#d8b15d] w-full-t flex ">
            <div className="text-black flex-1 h-full">
              <button className="p-2 duration-1000 hover:bg-[#edc769] w-full h-full">
                Charges
              </button>
            </div>
            <div className="text-black flex-1 h-full">
              <button className="p-2 duration-1000 hover:bg-[#edc769] w-full h-full">
                Crime Weapon
              </button>
            </div>
            <div className="text-black flex-1 h-full">
              <button className="p-2 duration-1000 hover:bg-[#edc769] w-full h-full">
                Charges
              </button>
            </div>
          </div>
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
