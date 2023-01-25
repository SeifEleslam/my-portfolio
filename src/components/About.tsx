import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
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

export default function About({
  state,
  aboutState,
}: {
  state: string;
  aboutState: "skills" | "aboutMe";
}) {
  const [des, setDes] = useState<"skills" | "aboutMe">("aboutMe");
  const [ref, inView] = useInView();
  const [expand, setExpand] = useState(false);
  const [collapse, setCollapse] = useState<"exp" | "comf" | "fam">("exp");

  useEffect(() => {
    setDes(aboutState);
  }, [aboutState]);
  return (
    <Element
      name="about"
      id="about"
      className="relative overflow-hidden w-full h-full flex "
    >
      <div
        ref={ref}
        className={
          (inView && state === "about" ? " animate-zoom  " : " ") +
          (!expand
            ? " mt-[12vh] h-[60vh]  mx-auto md:ml-[10vw] md:w-2/3 w-[80%] "
            : " w-full h-full z-[1000] ") +
          " relative origin-left z-[100] duration-500"
        }
      >
        <div
          className={
            (expand ? "-bottom-[1rem]  " : " -bottom-[4rem]  ") +
            "z-[101] absolute duration-500 lg:w-[8rem] w-[6rem] p-2 h-[8rem] mx-auto inset-x-0  "
          }
        >
          <div
            className={
              (inView && des === "aboutMe"
                ? "   translate-y-0 "
                : "  opacity-0 translate-y-[100%] ") +
              " duration-[500ms] h-full w-full ease-in-out"
            }
          >
            <Info />
          </div>
          <div
            className={
              (inView && des === "skills"
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
              (inView && des === "aboutMe" ? " " : " translate-x-[300%]") +
              "  text-[3rem] lg:text-[6rem] text-[#aaa] text-shadow cursor-pointer duration-[1000ms] "
            }
            onClick={() => {
              setDes("skills");
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
              (inView && des === "skills" ? " " : " -translate-x-[300%]") +
              " text-[3rem] lg:text-[6rem] text-[#aaa] text-shadow cursor-pointer duration-[1000ms] "
            }
            onClick={() => {
              setDes("aboutMe");
            }}
          >
            <TiChevronLeftOutline color="#d8b15d" />
          </div>
        </div>
        <div className="w-full h-full text-[#aaa] flex  ">
          {/* <div
            className={`${
              inView ? "w-0 " : "w-[100%]"
            }  right-0 h-full absolute bg-[#d8b15d] duration-[1500ms] ease-in-out`}
          >
            <div
              className={`${
                inView ? "w-[100%] " : "w-0 "
              } h-full ml-0 bg-[#282c34] duration-[1500ms] ease-in-out `}
            ></div>
          </div> */}
          <div
            className={`${
              inView && state === "about" ? "animate-slideright " : " scale-0 "
            } right-0 h-full z-[1000] w-full absolute bg-[#282c34] origin-right`}
          >
            <div
              className={`${
                inView && state === "about" ? "animate-hesitate" : ""
              } h-full w-full ml-0 bg-[#edc769] `}
            ></div>
          </div>
          <div className=" w-full h-full relative">
            <div
              className={
                (inView ? " shadow-3xl " : " ") +
                (des === "aboutMe"
                  ? "scale-1 translate-x-0 "
                  : "scale-[.75] translate-x-[100%] opacity-0") +
                " bg-[#272b33] duration-500 ease-in-out w-full absolute h-full overflow-hidden"
              }
            >
              {!expand ? (
                <button
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
                (inView ? " shadow-3xl " : " ") +
                (des === "skills"
                  ? "translate-x-0  scale-1"
                  : "-translate-x-[100%] scale-[.75] opacity-0") +
                " bg-[#272b33]  duration-500 absolute ease-in-out w-full h-full overflow-hidden"
              }
            >
              {!expand ? (
                <button
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
                <div className="p-[1vw] text-left w-full">
                  <div
                    onClick={() => {
                      setCollapse("exp");
                    }}
                    className="my-auto flex justify-between items-center p-2 bg-[#aaa] shadow-xxl cursor-pointer mx-auto text-[black] text-[3vw] sm:text-[20px] lg:text-[30px] lg:text-[30px] "
                  >
                    <div>Experienced At:</div>
                    <div
                      className={
                        (collapse === "exp" ? " rotate-180 " : " ") +
                        " duration-500"
                      }
                    >
                      <SlArrowDown size="20px" />
                    </div>
                  </div>
                  <Collapse open={collapse === "exp"} height="12vh">
                    <div className="w-full h-[12vh] flex p-2">
                      <div className="h-full flex-1">
                        <Html />
                      </div>
                      <div className="h-full flex-1">
                        <Css />
                      </div>
                      <div className="h-full flex-1">
                        <Js />
                      </div>
                      <div className="h-full flex-1">
                        <React />
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="p-[1vw] text-left w-full">
                  <div
                    onClick={() => {
                      setCollapse("comf");
                    }}
                    className="my-auto flex justify-between items-center p-2 bg-[#aaa] shadow-xxl cursor-pointer mx-auto text-[black] text-[3vw] sm:text-[20px] lg:text-[30px] lg:text-[30px] "
                  >
                    <div> Comfortable With:</div>
                    <div
                      className={
                        (collapse === "comf" ? " rotate-180 " : " ") +
                        " duration-500"
                      }
                    >
                      <SlArrowDown size="20px" />
                    </div>
                  </div>
                  <Collapse open={collapse === "comf"} height="12vh">
                    <div className="w-full h-[12vh] p-2 flex duration-500">
                      <div className="h-full flex-1">
                        <Typescript />
                      </div>
                      <div className="h-full flex-1">
                        <Tailwind />
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="p-[1vw] text-left w-full">
                  <div
                    onClick={() => {
                      setCollapse("fam");
                    }}
                    className="my-auto flex justify-between items-center p-2 bg-[#aaa] shadow-xxl cursor-pointer mx-auto text-[black] text-[3vw] sm:text-[20px] lg:text-[30px] lg:text-[30px] "
                  >
                    <div> Familiar With:</div>
                    <div
                      className={
                        (collapse === "fam" ? " rotate-180 " : " ") +
                        " duration-500"
                      }
                    >
                      <SlArrowDown size="20px" />
                    </div>
                  </div>
                  <Collapse open={collapse === "fam"} height={"12vh"}>
                    <div className="w-full h-[12vh] flex p-2">
                      <div className="h-full flex-1">
                        <Postgres />
                      </div>
                      <div className="h-full flex-1">
                        <Nextjs />
                      </div>
                      <div className="h-full flex-1">
                        <Golang />
                      </div>

                      <div className="h-full flex-1">
                        <Docker />
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
