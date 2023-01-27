import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { LinkedIn, Mail } from "./svgs/Links";
import contactLogo from "../images/contact.jpg";
import Image from "next/image";
import contactImg from "../images/contact.jpg";

export default function contact() {
  const [ref, inView] = useInView();

  return (
    <Element
      name="contact"
      id="contact"
      className="relative text-white overflow-hidden w-full h-full"
    >
      <div ref={ref} className={"mt-10 absolute"}></div>
      <div
        className={
          "z-10 " +
          (inView ? " animate-zoom shadow-gold " : " scale-[0.9] ") +
          " bg-center  md:top-[10vh] top-0 z-0 right-[10vw] bg-cover  origin-left mt-[12vh] h-[60vh] mx-auto  md:w-3/5 w-[95%] duration-500"
        }
      >
        {/* bg-[url('../src/images/contact.jpg')] */}
        <Image
          priority={true}
          className="w-full h-full"
          src={contactImg}
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
      <div
        className={
          (inView ? " backdrop-blur bg-[#272b33]/75 " : " ") +
          "   w-fit md:ml-[10vw] mx-auto translate-y-[-70%] overflow-hidden duration-1500 mb-[6vh] shadow-3xl p-2"
        }
      >
        <div
          className={
            (inView ? " translate-x-0  " : " translate-x-[-100%] ") +
            " duration-500 w-fit p-5  mx-auto border-b-[2px] border-[#aaa] text-left text-[#d8b15d] leading-[5vh] text-[6vh] text-shadow Alumni"
          }
        >
          {/* <div
            className={`${
              inView ? "animate-slideright " : ""
            } right-0 h-full top-0 w-full absolute bg-[#282c34] origin-right`}
          >
            <div
              className={`${
                inView ? "animate-hesitate" : ""
              } h-full w-full ml-0 bg-[#edc769] `}
            ></div>
          </div> */}
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
        <div className=" mx-auto w-fit ">
          <a
            href="mailto:seifgouda98@gmail.com"
            className={
              (inView ? " translate-x-0  " : " translate-x-[-100%] ") +
              " mb-[5vh] mt-[5vh] w-fit text-shadow border-l-[2px] border-[#aaa]  hover p-2 flex items-center text-[#aaa] md:text-[1.6rem] text-[1.2rem]  hover:text-[#d8b15d] focus:text-[#d8b15d] duration-500 delay-[200ms]"
            }
          >
            <div className="md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem] mr-2">
              <Mail />
            </div>
            SeifGouda98@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/seifeleslam-gouda-0a5504256"
            target="_blank"
            className={
              (inView ? " translate-x-0  " : " translate-x-[-120%] ") +
              "  w-fit duration-500 delay-[400ms] text-shadow border-l-[2px] border-[#aaa] hover p-2 flex items-center text-[#aaa] md:text-[1.6rem] text-[1.2rem]  hover:text-[#d8b15d] mb-4 focus:text-[#d8b15d] "
            }
          >
            <div className="md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem] mr-2">
              <LinkedIn />
            </div>
            LinkedIn
          </a>
        </div>
      </div>
    </Element>
  );
}
