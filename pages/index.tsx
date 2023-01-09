import Head from "next/head";
import { Main } from "../src/components/Main";
import { useEffect, useState } from "react";
import TargetSVG from "../src/components/TargetSVG";
import CoolBg from "../src/components/CoolBg";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView();

  // const mouseMove = (e: any) => {
  //   const X = e.clientX - 450;
  //   const Y = e.clientY - 450;
  //   const el = document.getElementById("target");
  //   if (el) el.style.transform = `translate3d(${-X / 7}px, ${-(Y / 7)}px, 0px)`;
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // });

  return (
    <>
      {/* <div className="animate-slideup w-[100vw] bg-[#282c34] z-[100] h-[100vh] flex absolute justify-center items-center">
        <div className="inline h-[60vh]">
          <TargetSVG motion={false} rotate={true} />
        </div>
      </div> */}
      <div ref={ref}>
        <div
          id="scene"
          className={
            (inView ? " scale-[1] " : " scale-[1.5] opacity-0 ") +
            " md:pl-[30%] origin-bottom lg:pl-[50%] pl-0 duration-1000 h-full w-full inset-0 z-[0] text-right fixed"
          }
        >
          <div data-depth="0.8" className={"w-full  h-full "}>
            <TargetSVG />
          </div>
        </div>
        <Main />
      </div>
    </>
  );
}
