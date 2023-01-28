import { Element } from "react-scroll";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { useInView } from "react-intersection-observer";
import { Info, Skills } from "./svgs/AboutSections";
import {
  Css,
  Docker,
  Golang,
  Html,
  Js,
  Nextjs,
  Postgres,
  React,
  Tailwind,
  Typescript,
} from "./svgs/Skills";
import { Collapse } from "./util/Collapse";
import { BiExpandAlt } from "react-icons/bi";
import { FiMinimize2 } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import aboutImg from "../images/about.jpg";

export default function About({
  state,
  aboutState,
  setAboutState,
}: {
  state: string;
  aboutState: "skills" | "aboutMe";
  setAboutState: Dispatch<SetStateAction<"skills" | "aboutMe">>;
}) {
  const [ref, inView] = useInView();
  const [expand, setExpand] = useState(false);
  const [collapse, setCollapse] = useState<"exp" | "comf" | "fam">("exp");

  return (
    <Element
      name="about"
      id="about"
      className="relative overflow-hidden w-[full] h-full "
    >
      <div className="w-full h-[90%] inset-y-2 absolute " ref={ref}></div>

      <div
        className={
          (inView && state === "about" ? "   " : "  ") +
          (!expand
            ? " mt-[12vh] h-[50vh] top-[18vh] mx-auto md:ml-[50vw] w-[80%] md:w-2/5 xl:w-1/3 "
            : " w-full h-full z-[1000] top-0 mx-auto ") +
          " relative origin-right z-[100]  duration-[900ms]"
        }
      >
        <div
          className={
            (expand
              ? " -top-16 -left-5 scale-[.5] "
              : " -bottom-[4rem] inset-x-0 ") +
            " absolute z-10  duration-500 mx-auto origin-bottom  lg:w-[8rem] w-[6rem] p-2 h-[8rem] "
          }
        >
          <div
            className={
              (inView && aboutState === "aboutMe"
                ? "   translate-y-0 "
                : "  opacity-0 translate-y-[100%] ") +
              " duration-[500ms] h-full w-full ease-in-out"
            }
          >
            <Info />
          </div>
          <div
            className={
              (inView && aboutState === "skills"
                ? " translate-y-[-100%] "
                : "  opacity-0 translate-y-[100%]   ") +
              " duration-[500ms] h-full w-full ease-in-out"
            }
          >
            <Skills />
          </div>
        </div>
        <div
          className={
            "absolute lg:-bottom-[6rem] -bottom-[3rem] right-0 overflow-hidden"
          }
        >
          <div
            className={
              (inView && aboutState === "skills"
                ? " "
                : " translate-x-[300%]") +
              "  text-[3rem] lg:text-[6rem] text-[#aaa] text-shadow cursor-pointer duration-[1000ms] "
            }
            onClick={() => {
              setAboutState("aboutMe");
            }}
          >
            <TiChevronRightOutline color="#d8b15d" />
          </div>
        </div>
        <div
          className={
            " absolute lg:-bottom-[6rem] -bottom-[3rem] left-0 overflow-hidden"
          }
        >
          <div
            className={
              (inView && aboutState === "aboutMe"
                ? " "
                : " -translate-x-[300%]") +
              " text-[3rem] lg:text-[6rem] text-[#aaa] text-shadow cursor-pointer duration-[1000ms] "
            }
            onClick={() => {
              setAboutState("skills");
            }}
          >
            <TiChevronLeftOutline color="#d8b15d" />
          </div>
        </div>
        <div className="w-full h-full text-[#aaa] flex  ">
          <div className={" w-full  h-full relative"}>
            <div
              className={
                (inView ? " shadow-3xl blur-0 " : " blur-xl ") +
                (aboutState === "aboutMe"
                  ? "scale-1 translate-x-0 "
                  : "scale-[.75] translate-x-[100%] opacity-0") +
                " backdrop-blur bg-[#272b33]/75 duration-[1500ms] ease-in-out w-full absolute h-full overflow-hidden"
              }
            >
              {!expand ? (
                <button
                  aria-label="expand"
                  onClick={() => {
                    setExpand(true);
                  }}
                  className=" absolute top-2 right-2 z-[100] text-[#d8b15d]"
                >
                  <BiExpandAlt
                    size="40px"
                    className="hover:rotate-90 duration-500"
                  />
                </button>
              ) : (
                <button
                  aria-label="disable expand"
                  onClick={() => {
                    setExpand(false);
                  }}
                  className=" absolute top-2 right-2 z-[100] text-[#d8b15d]"
                >
                  <FiMinimize2
                    size="40px"
                    className="hover:rotate-90 duration-500"
                  />
                </button>
              )}

              <h1 className="mb-4 sm:text-[25px] lg:text-[35px] text-shadow py-2 text-[#d8b15d] text-center">
                About Me
              </h1>
              <div className="p-[1vw] text-left w-full">
                <p className="text-[#aaa] sm:text-[20px] lg:text-[30px] absolute ease-in-out  ">
                  Hello, 👋👋
                  <br />
                  My name is SeifEleslam. <br /> I am an experienced front-end
                  developer with the required UI/UX design knowledge. I have a
                  significant focus on the details seeking a perfectly designed
                  user interface with the best possible performance to provide a
                  remarkable user experience.
                  <br />
                </p>
              </div>
            </div>
            <div
              className={
                (inView ? " shadow-3xl blur-0 " : " blur-xl ") +
                (aboutState === "skills"
                  ? "translate-x-0  scale-1"
                  : "-translate-x-[100%] scale-[.75] opacity-0") +
                " backdrop-blur bg-[#272b33]/75 duration-500 absolute ease-in-out w-full h-full overflow-hidden"
              }
            >
              {!expand ? (
                <button
                  aria-label="expand"
                  onClick={() => {
                    setExpand(true);
                  }}
                  className=" absolute top-2 right-2 z-[100] text-[#d8b15d]"
                >
                  <BiExpandAlt
                    size="40px"
                    className="hover:rotate-90 duration-500"
                  />
                </button>
              ) : (
                <button
                  aria-label="disable expand"
                  onClick={() => {
                    setExpand(false);
                  }}
                  className=" absolute top-2 right-2 z-[100] text-[#d8b15d]"
                >
                  <FiMinimize2
                    size="40px"
                    className="hover:rotate-90 duration-500"
                  />
                </button>
              )}
              <div className=" ">
                <h1 className="mb-4 sm:text-[25px] lg:text-[35px] text-shadow py-2 text-[#d8b15d] text-center">
                  Technical Skills
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "z-10 " +
          (inView ? " animate-zoom shadow-gold " : " scale-[0.9] ") +
          " bg-center absolute  top-[0vh] z-0  bg-cover origin-right mt-[8vh] h-[60vh]  mx-auto right-0 left-0 md:w-3/5 w-[95%] duration-500"
        }
      >
        {/* bg-[url('../src/images/contact.jpg')] */}
        <Image
          priority={true}
          className="w-full h-full"
          src={aboutImg}
          alt={""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          className={`${
            inView ? "animate-slideright " : ""
          } right-0 h-full top-0 z-[10] w-full absolute bg-[#282c34] origin-right`}
        >
          <div
            className={`${
              inView ? "animate-hesitate" : ""
            } h-full w-full ml-0 bg-[#edc769] `}
          ></div>
        </div>
      </div>
    </Element>
  );
}
