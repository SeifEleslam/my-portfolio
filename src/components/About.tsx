import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { useInView } from "react-intersection-observer";
import { Info } from "./AboutSections";

export default function About({ state }: { state: string }) {
  const [des, setDes] = useState("aboutMe");
  const [ref, inView] = useInView();

  return (
    <Element
      name="about"
      id="about"
      className="relative overflow-hidden w-full h-full flex "
    >
      <div
        ref={ref}
        className={
          (inView ? " animate-zoom shadow-3xl " : " opacity-0 ") +
          " relative origin-left z-[100] mt-[12vh] mx-auto md:ml-[10vw] md:w-2/3 w-[95%] h-2/3 duration-500"
        }
      >
        <div
          className={
            "z-[101] absolute w-[10rem] p-2 h-[10rem] -bottom-[5rem] inset-x-0 mx-auto overflow-hidden"
          }
        >
          <div
            className={
              (inView && des === "aboutMe"
                ? " h-full  translate-y-0 "
                : " h-0 translate-y-[-300%] ") +
              " duration-[1500ms] ease-in-out"
            }
          >
            <Info />
          </div>
          <div
            className={
              (inView && des === "skills"
                ? "h-full  translate-y-0 "
                : " h-0 translate-y-[300%]   ") +
              " duration-[1500ms] ease-in-out"
            }
          >
            <Info />
          </div>
        </div>
        <div
          className={"z-[101] absolute -bottom-[6rem]  right-0 overflow-hidden"}
        >
          <div
            className={
              (inView && des === "aboutMe" ? " " : " hidden") +
              " text-[6rem] text-[#aaa] text-shadow cursor-pointer "
            }
            onClick={() => {
              setDes("skills");
            }}
          >
            <TiChevronRightOutline />
          </div>
        </div>
        <div
          className={"z-[101] absolute -bottom-[6rem] left-0 overflow-hidden"}
        >
          <div
            className={
              (inView && des === "skills" ? " " : " hidden") +
              " text-[6rem] text-[#aaa] text-shadow cursor-pointer"
            }
            onClick={() => {
              setDes("aboutMe");
            }}
          >
            <TiChevronLeftOutline />
          </div>
        </div>
        <div className="w-full h-full text-[#aaa] bg-[#272b33] flex ">
          <div
            className={`${
              inView ? "w-0 " : "w-[100%]"
            } right-0 w-[0] h-full absolute bg-[#d8b15d] duration-[1500ms] ease-in-out`}
          >
            <div
              className={`${
                inView ? "w-[100%] " : "w-0 "
              } h-full ml-0 w-[0%] bg-[#282c34] duration-[1500ms] ease-in-out `}
            ></div>
          </div>
          <div
            className={
              (des === "aboutMe" ? "w-full" : "w-0") +
              " duration-1000 ease-in-out overflow-hidden"
            }
          >
            <h1 className="mb-4 text-shadow py-2 text-[2rem] bg-[#d8b15d] text-[#eee] text-center">
              About Me
            </h1>
            <div className="p-[1vw] text-left w-full">
              <p className="text-[#555] text-[4vh]  ">
                Hello,
                <br />
                My name is SEIFELESLAM
                <br />I am a passionate web designer, who seeks perfection and
                gives a lot of attention to details.
              </p>
            </div>
          </div>
          <div
            className={
              (des === "skills" ? "w-full" : "w-0") +
              " duration-1000 ease-in-out overflow-hidden"
            }
          >
            <h1 className="mb-4 text-shadow py-2 text-[2rem] bg-[#d8b15d] text-[#eee] text-center">
              About Me
            </h1>
            <div className="p-[1vw] text-left w-full">
              <p className="text-[#555] text-[4vh]  ">
                Hello,
                <br />
                My name is SEIFELESLAM
                <br />I am a passionate web designer, who seeks perfection and
                gives a lot of attention to details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
