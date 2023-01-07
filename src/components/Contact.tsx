import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

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
          (inView ? " scale-x-100 shadow-gold " : " scale-x-50 opacity-0 ") +
          " bg-[#272b33]/75 origin-left backdrop-blur duration-1000 w-fit p-5 sm:ml-[10vw] mx-auto border-x-[2px] border-[#aaa] text-left text-[#d8b15d] leading-[5vh] text-[6vh] mt-[20vh] text-shadow Alumni"
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
      <div className="w-[90%] lg:w-[80%] shadow-3xl bg-[#272b33]/75 backdrop-blur border-t-[2px] border-[#aaa] mt-0 h-[20vh] mx-auto ">
        <a>seifgouda98@gmail.com</a>
      </div>
    </Element>
  );
}
