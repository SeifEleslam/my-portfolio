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
          " bg-[#222]/25 backdrop-blur lg:ml-[12vw] mt-[15vh] lg:w-[45%] w-auto z-10 relative duration-[1000ms]"
        }
      >
        <div
          className={`${
            inView ? "animate-slideright" : ""
          } right-0 w-[0] h-full absolute bg-[#edc769]`}
        >
          <div
            className={`${
              inView ? "animate-hesitate" : ""
            } h-full ml-0 w-[0%] bg-[#282c34] `}
          ></div>
        </div>
        <div className="my-[2vh] bg-[#d8b15d] shadow h-[1vh] rounded-full"></div>
        <p className="leading-[8vh] Alumni text-[#aaa] text-shadow">Manners</p>
        <p className="leading-[8vh] Alumni text-[#aaa] text-shadow">Maketh</p>
        <p className="leading-[8vh] Alumni text-[#aaa] text-shadow">Man</p>
        <div className="my-[2vh] bg-[#d8b15d] shadow h-[1vh] rounded-full"></div>
      </div>

      <div
        className={
          (inView ? " animate-showleft " : " opacity-0 ") +
          " md:pl-[30%] lg:pl-[50%] pl-0 duration-500 h-full w-full absolute inset-0 z-[0] text-right "
        }
      >
        <SuitSVG />
      </div>
      <div
        ref={ref2}
        className={
          " mx-auto w-[90vw] left-0 right-0 lg:ml-[12vw] overflow-hidden absolute md:bottom-[5vh] bottom-[3vh] py-[10vh] mx-auto md:relative z-[10]"
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
          onClick={() => {
            handleState("about");
          }}
          className={
            (inView ? "animate-rotatescroll " : " opacity-0 ") +
            "  mt-[3vh] rotate-90 text-[#e0bd88] text-[5vh] pl-[1vh] duration-[400ms] hover:translate-y-[1vh] text-shadow"
          }
        >
          Scroll?
        </button>
      </div>
    </Element>
  );
}
