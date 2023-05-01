import { Sec1 } from "@/components/Sec1";
import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Sec2 } from "@/components/Sec2";
import { Sec3 } from "@/components/Sec3";
import { Sec4 } from "./Sec4";
import { Sec5 } from "./Sec5";
import Image from "next/image";
import end from "../assets/end.svg";

export const Main = () => {
  const ref1 = useRef(null);
  const sec1 = useInView(ref1, { margin: "0% 0px -50% 0px" });
  const ref2 = useRef(null);
  const sec2 = useInView(ref2, { margin: "0% 0px -50% 0px" });
  const ref3 = useRef(null);
  const sec3 = useInView(ref3, { margin: "0% 0px -50% 0px" });
  const ref4 = useRef(null);
  const sec4 = useInView(ref4, { margin: "0% 0px -50% 0px" });
  const ref5 = useRef(null);
  const sec5 = useInView(ref5, { margin: "0% 0px -50% 0px" });

  const [state, setState] = useState(0);

  useEffect(() => {
    if (sec1 === true && sec2 === false) setState(0);
  }, [sec1, sec2]);
  useEffect(() => {
    if (sec2 === true && sec3 === false) setState(1);
  }, [sec2, sec3]);
  useEffect(() => {
    if (sec3 === true && sec4 === false) setState(2);
  }, [sec3, sec4]);
  useEffect(() => {
    if (sec4 === true && sec5 === false) setState(3);
  }, [sec4, sec5]);
  useEffect(() => {
    console.log(sec5, sec4);

    if (sec5 === true) setState(4);
  }, [sec5]);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <main>
      <Navbar index={state} />
      <div id="sec1" ref={ref1}>
        <Sec1 />
      </div>
      <div className="w-[80%] mx-auto relative h-40">
        <Image className="h-full w-full" src={end} alt="" />
      </div>
      <div id="sec2" ref={ref2}>
        <Sec2 />
      </div>
      <div className="w-[80%] mx-auto relative h-40">
        <Image className="h-full w-full" src={end} alt="" />
      </div>
      <div id="sec3" ref={ref3}>
        <Sec3 />
      </div>
      <div className="w-[80%] mx-auto relative h-40">
        <Image className="h-full w-full" src={end} alt="" />
      </div>
      <div id="sec4" ref={ref4}>
        <Sec4 />
      </div>
      <div className="w-[80%] mx-auto relative h-40">
        <Image className="h-full w-full" src={end} alt="" />
      </div>
      <div id="sec5" ref={ref5}>
        <Sec5 />
      </div>
    </main>
  );
};
