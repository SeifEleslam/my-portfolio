import { useState, useEffect, useRef } from "react";
var Scroll = require("react-scroll");

import { Element } from "react-scroll";
import Header from "./Header";
import Drama from "./Drama";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

export function Main() {
  const appTable = ["drama", "about", "projects", "contact"];
  const [state, setState] = useState(appTable[0]);
  const [curr, setCurr] = useState(0);
  const ref = useRef(null);

  const slideData = useRef<{
    scrollings: number[];
    prev: number;
    last: number;
  }>({
    scrollings: [],
    prev: 0,
    last: 0,
  });
  function slide(e: any) {
    if (e.stopPropagation) e.stopPropagation();
    e.preventDefault();
    // figuring out if the scrolling is by hardware or user
    // taken from fullpage open source:
    // https://github.com/alvarotrigo/fullPage.js/
    if (new Date().getTime() - slideData.current.last > 200) {
      slideData.current.scrollings = [];
    }
    slideData.current.last = new Date().getTime();

    // callculate delta for various events
    // add the value to scrolling
    const delta = e.deltaY || e.detail;
    if (slideData.current.scrollings.length > 120) {
      slideData.current.scrollings.shift();
      slideData.current.scrollings.push(Math.abs(delta));
    } else slideData.current.scrollings.push(Math.abs(delta));

    // calculate average for end and for most of the scrolling orders
    // to be able to notice new orders

    const averageEnd = average(slideData.current.scrollings, 10);
    const averageAll = average(slideData.current.scrollings, 70);
    const isAccelrating = averageEnd >= averageAll;

    if (isAccelrating) {
      if (delta > 0) {
        slideDown();
      } else if (delta < 0) {
        slideUp();
      }
    }
  }

  function average(arr: number[], num: number) {
    let sum: number = 0;
    arr = arr.slice(num > arr.length ? 0 : -num);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return Math.ceil(sum / num);
  }

  const ts = useRef(0);
  function touchStart(e: TouchEvent) {
    ts.current = e.touches[0].clientY;
  }
  const wait = useRef(0);
  const touchMove = (e: TouchEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    e.preventDefault();
    var te = e.changedTouches[0].clientY;
    if (ts.current > te + 50) {
      slideDown();
    } else if (ts.current < te - 50) {
      slideUp();
    }
  };

  const slideDown = (val: "one" | "all" = "one") => {
    slideData.current.last = new Date().getTime();
    if (slideData.current.last - slideData.current.prev < 1000) return;
    if (curr < appTable.length - 1 && val === "one") {
      slideData.current.prev = slideData.current.last;
      setState(appTable[curr + 1]);
    } else if (curr !== appTable.length - 1 && val === "all") {
      setState(appTable[appTable.length - 1]);
    } else {
      return;
    }
  };
  const slideUp = (val: "one" | "all" = "one") => {
    slideData.current.last = new Date().getTime();
    if (slideData.current.last - slideData.current.prev < 1000) return;
    if (curr > 0 && val === "one") {
      slideData.current.prev = slideData.current.last;
      setState(appTable[curr - 1]);
    } else if (curr !== 0 && val === "all") {
      setState(appTable[0]);
    } else {
      return;
    }
  };

  const keyNav = (e: any) => {
    if (["ArrowUp", "PageUp"].indexOf(e.code) > -1) {
      slideUp();
    } else if (["ArrowDown", "PageDown", "Space"].indexOf(e.code) > -1) {
      slideDown();
    } else if (e.code === "End") {
      slideDown("all");
    } else if (e.code === "Home") {
      slideUp("all");
    }
  };

  const resize = () => {
    // setState(appTable[curr]);
    Scroll.scroller.scrollTo(state, {
      duration: 1500,
      containerId: "App",
      smooth: "easeInOutQuint",
      offset: 0,
      ignoreCancelEvents: true,
    });
    setCurr(appTable.indexOf(state));
  };
  const handleState = (newVal: string) => {
    setState(newVal);
  };

  const screenOri = (e: any) => {
    console.log(e.absolute);
    let customAlpha = e.alpha > 180 ? -360 + e.alpha : e.alpha;
    // let customBeta = e.beta < 0 ? -e.beta : e.beta;

    const el = document.getElementById("target");
    if (el) {
      el.style.transform = `rotate(${2 * customAlpha}deg)`;
      // el.style.transform = `translate3d(${
      //   90 - customAlpha
      // }px, ${-customBeta}px, 0px)`;
    }
  };
  useEffect(() => {
    Scroll.scroller.scrollTo(state, {
      duration: 1500,
      containerId: "App",
      smooth: "easeInOutQuint",
      offset: 0,
      ignoreCancelEvents: true,
    });
    setCurr(appTable.indexOf(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    window.addEventListener("wheel", slide);
    window.addEventListener("mousewheel", slide);
    window.addEventListener("DOMMouseScroll", slide);
    window.addEventListener("resize", resize);
    window.addEventListener("keyup", keyNav);
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    return () => {
      window.removeEventListener("wheel", slide);
      window.removeEventListener("mousewheel", slide);
      window.removeEventListener("DOMMouseScroll", slide);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keyup", keyNav);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
    };
  });

  // useEffect(() => {
  //   window.addEventListener("resize", resize);
  //   window.addEventListener("keyup", keyNav);
  //   return () => {
  //     window.removeEventListener("resize", resize);
  //     window.removeEventListener("keyup", keyNav);
  //   };
  // });
  // useEffect(() => {
  //   window.addEventListener("touchstart", touchStart);
  //   window.addEventListener("touchmove", touchMove);
  //   return () => {
  //     window.removeEventListener("touchstart", touchStart);
  //     window.removeEventListener("touchmove", touchMove);
  //   };
  // });

  return (
    <div
      ref={ref}
      id="App"
      className="App absolute overflow-hidden w-full h-full"
    >
      <Header />
      <Drama handleState={handleState} state={state} />
      <About state={state} />
      <Element
        name="projects"
        id="projects"
        className="text-white overflow-hidden w-full h-full"
      >
        Projects
      </Element>
      <Contact />

      <Footer linkState={state} handleState={handleState} />
    </div>
  );
}
