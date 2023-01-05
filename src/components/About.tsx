import { Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { useInView } from "react-intersection-observer";
import { Info, Skills } from "./AboutSections";

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
            // ()+
            "z-[101] absolute lg:w-[8rem] w-[6rem] p-2 h-[8rem] -bottom-[4rem] inset-x-0 mx-auto overflow-hidden"
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
        <div className="w-full h-full text-[#aaa] bg-[#272b33]/75 backdrop-blur flex  ">
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
              inView ? "animate-slideright" : ""
            } right-0 h-full absolute z-[100] bg-[#edc769]`}
          >
            <div
              className={`${
                inView ? "animate-hesitate" : ""
              } h-full ml-0 bg-[#282c34] `}
            ></div>
          </div>
          <div className="overflow-hidden w-full h-full relative">
            <div
              className={
                (des === "aboutMe"
                  ? "scale-1 translate-x-0"
                  : "scale-[.75] translate-x-[100%]  bg-[#272b33]") +
                " shadow-3xl duration-1000 ease-in-out w-full absolute h-full overflow-hidden"
              }
            >
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
                (des === "skills"
                  ? "translate-x-0 shadow-3xl scale-1"
                  : "-translate-x-[100%] scale-[.75]  bg-[#272b33]") +
                " duration-1000 absolute ease-in-out w-full h-full overflow-hidden"
              }
            >
              <h1 className="mb-4 text-shadow sm:text-[25px] lg:text-[35px] text-[2rem] text-[#d8b15d] text-center">
                Technical Skills
              </h1>
              <div className="p-[1vw] text-left w-full">
                <p className="text-[#555] text-[4vh] sm:text-[20px] lg:text-[30px] ">
                  Hello, 👋
                  <br />
                  My name is SEIFELESLAM
                  <br />I am a passionate web designer, who seeks perfection and
                  gives a lot of attention to details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
