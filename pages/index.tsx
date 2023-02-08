import { Main } from "../src/components/home/Main";
import { useState } from "react";
import TargetSVG from "../src/components/svgs/TargetSVG";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="bgmain">
        <div
          id="scene"
          className={
            "bgmain md:pl-[30%] origin-bottom lg:pl-[50%] pl-0  h-full w-full inset-0 z-[0] text-right fixed"
          }
        >
          <div data-depth="0.3" className={"w-full absolute  h-full "}>
            <TargetSVG />
          </div>
        </div>
        <Main />
      </div>
    </LazyMotion>
  );
}
