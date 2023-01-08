import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { LinkedIn, Mail } from "./Links";

export default function contact() {
  const [ref, inView] = useInView();

  return (
    <Element
      name="contact"
      id="contact"
      className="text-white overflow-hidden w-full h-full"
    >
      <div
        ref={ref}
        className={
          (inView ? " scale-x-100 shadow-3xl " : " scale-x-50 opacity-0 ") +
          " bg-[#272b33]/75 origin-left backdrop-blur duration-1000 w-fit p-5 sm:ml-[10vw] mx-auto border-l-[2px] border-[#aaa] text-left text-[#d8b15d] leading-[5vh] text-[6vh] mt-[20vh] text-shadow Alumni"
        }
      >
        <div
          className={`${
            inView ? "animate-slideright" : ""
          } right-0 top-0 h-full absolute bg-[#edc769]`}
        >
          <div
            className={`${
              inView ? "animate-hesitate" : ""
            } h-full ml-0 bg-[#282c34] `}
          ></div>
        </div>
        <div className="">
          <p className="">Reach</p>
        </div>
        <div className="">
          <p className="ml-[15vh]">Me</p>
        </div>
        <div className="">
          <p className="ml-[21vh]">Out</p>
        </div>
      </div>
      <div
        className={
          (inView ? " scale-y-100  " : " scale-y-[0] opacity-0 ") +
          "w-[90%] lg:w-[80%] md:flex-row flex flex-col  justify-around items-center origin-top duration-1000 shadow-3xl bg-[#272b33]/75 backdrop-blur border-t-[2px] border-[#aaa] mt-0 h-[40vh] mx-auto "
        }
      >
        <a
          href="mailto:seifgouda98@gmail.com"
          className="text-shadow border-[2px] border-[#aaa] bg-[#272b33] hover:shadow-3xl p-2 flex items-center text-[#aaa] md:text-[2vw] text-[1.2rem]  hover:text-[#d8b15d] focus:text-[#d8b15d] duration-1000"
        >
          <div className="md:w-[4vw] w-[2rem] md:h-[4vw] h-[2rem] mr-2">
            <Mail />
          </div>
          SeifGouda98@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/seifeleslam-gouda-0a5504256"
          target="_blank"
          className="text-shadow border-[2px] border-[#aaa] bg-[#272b33] hover:shadow-3xl p-2 flex items-center text-[#aaa] md:text-[2vw] text-[1.2rem]  hover:text-[#d8b15d] focus:text-[#d8b15d] duration-1000"
        >
          <div className="md:w-[4vw] w-[2rem] md:h-[4vw] h-[2rem] mr-2">
            <LinkedIn />
          </div>
          LinkedIn
        </a>
      </div>
    </Element>
  );
}
