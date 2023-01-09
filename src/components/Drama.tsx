import SuitSVG from "./SuitSVG";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Drama({
  state,
  handleState,
}: {
  state: string;
  handleState: (val: string) => void;
}) {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <Element name="drama" id="drama" className="overflow-hidden w-full h-full">
      <div
        ref={ref}
        className={
          (inView ? " animate-zoom shadow-gold " : " opacity-0 ") +
          " bg-[#222]/25 origin-left backdrop-blur overflow-hidden lg:ml-[12vw] mt-[15vh] lg:w-[45%] w-auto z-10 relative duration-[1000ms]"
        }
      >
        <div
          className={`${
            inView ? "animate-slideright " : ""
          } right-0 h-full z-[1000] w-full absolute bg-[#282c34] origin-right`}
        >
          <div
            className={`${
              inView ? "animate-hesitate" : ""
            } h-full w-full ml-0 bg-[#edc769] `}
          ></div>
        </div>
        <div className="my-[2vh] bg-[#aaa] shadow h-[1vh]"></div>
        <p className="leading-[8vh] text-[8vh] Alumni text-[#d8b15d] text-shadow">
          Manners
        </p>
        <p className="leading-[8vh] text-[8vh] Alumni text-[#d8b15d] text-shadow">
          Maketh
        </p>
        <p className="leading-[8vh] text-[8vh] Alumni text-[#d8b15d] text-shadow">
          Man
        </p>
        <div className="my-[2vh] bg-[#aaa] shadow h-[1vh]"></div>
      </div>

      <div
        className={
          (inView2 ? " animate-showleft " : " ") +
          // (state !== "drama" ? "animate-hideleft " : " ") +
          " md:pl-[30%] lg:pl-[50%] pl-0 duration-500 opacity-0 h-full w-full absolute inset-0 z-[0] text-right "
        }
      >
        <SuitSVG />
      </div>
      <div
        ref={ref2}
        className={
          " mx-auto w-[90vw] left-0 right-0 lg:ml-[12vw] overflow-hidden absolute md:bottom-[5vh] bottom-[3vh] py-[16vh] mx-auto md:relative z-[10]"
        }
      >
        <p
          className={
            (inView ? " animate-showup " : " opacity-0 ") +
            " text-shadow text-[5vh] text-[#aaa]"
          }
        >
          Are we gonna stand here all day or you gonna
        </p>
        <button
          id="scroll"
          onClick={() => {
            handleState("about");
          }}
          className={
            (inView ? "animate-rotatescroll " : " opacity-0 ") +
            "  mt-[3vh] rotate-90 text-[#d8b15d] text-[5vh] pl-[1vh] duration-[400ms] active:translate-y-[2vh] text-shadow"
          }
        >
          Scroll?
        </button>
      </div>
    </Element>
  );
}
