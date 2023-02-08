import SuitSVG from "../svgs/SuitSVG";
import { Element } from "react-scroll";
import { m } from "framer-motion";

export default function Drama({
  state,
  handleState,
}: {
  state: string;
  handleState: (val: string) => void;
}) {
  const tx1 = {
    show: { y: 0, transition: { duration: 0.5, delay: 0.5 } },
    hide: { y: 400 },
  };
  const tx2 = {
    show: {
      y: 0,

      rotate: 90,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hide: { y: 400, rotate: 0 },
  };
  return (
    <Element name="drama" id="drama" className="overflow-hidden w-full h-full">
      <m.div
        className={
          " bg-[#222]/25 origin-left backdrop-blur overflow-hidden lg:ml-[12vw] mt-[15vh] lg:w-[45%] w-auto z-10 relative"
        }
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1, transition: { duration: 0.7 } }}
      >
        <m.div
          className={`right-0 h-full z-[1000] w-full absolute bg-[#282c34] origin-right`}
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0, transition: { duration: 0.5 } }}
        >
          <m.div
            className={`h-full w-full ml-0 bg-[#edc769] origin-left`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1, transition: { duration: 0.5 } }}
          ></m.div>
        </m.div>
        <div className="my-[2vh] bg-[#aaa] shadow h-[1vh]"></div>
        <p className="leading-[8vh] text-[4rem] lg:text-[6rem] Alumni text-[#d8b15d] text-shadow">
          Manners
        </p>
        <p className="leading-[8vh] text-[4rem] lg:text-[6rem] Alumni text-[#d8b15d] text-shadow">
          Maketh
        </p>
        <p className="leading-[8vh] text-[4rem] lg:text-[6rem] Alumni text-[#d8b15d] text-shadow">
          Man
        </p>
        <div className="my-[2vh] bg-[#aaa] shadow h-[1vh]"></div>
      </m.div>

      <m.div
        className=" md:pl-[30%] lg:pl-[50%] pl-0 h-[98%] w-full absolute inset-0 z-[0] text-right "
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <SuitSVG />
      </m.div>
      <m.div
        className={
          " mx-auto w-[90vw] left-0 right-0 lg:ml-[12vw] overflow-hidden absolute md:bottom-[5vh] bottom-[3vh] py-[16vh] mx-auto md:relative z-[10]"
        }
        whileInView={"show"}
        initial={"hide"}
      >
        <m.p
          className={" text-shadow lg:text-[3rem] text-[2rem] text-[#aaa]"}
          variants={tx1}
        >
          Are we gonna stand here all day or you gonna
        </m.p>
        <m.button
          id="scroll"
          onClick={() => {
            handleState("about");
          }}
          className={
            " lg:text-[3rem] text-[2rem] mt-[3vh] rotate-90 text-[#d8b15d] pl-[1vh] active:translate-y-[2vh] text-shadow"
          }
          variants={tx2}
        >
          Scroll?
        </m.button>
      </m.div>
    </Element>
  );
}
