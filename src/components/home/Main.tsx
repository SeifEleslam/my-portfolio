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
  const [curr, setCurr] = useState(0);
  const ref = useRef(null);
  const [aboutState, setAboutState] = useState<"skills" | "aboutMe">("aboutMe");

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
    // figuring out if the scrolling is by hardware or user
    // taken from fullpage open source:
    // https://github.com/alvarotrigo/fullPage.js/
    if (new Date().getTime() - slideData.current.last > 200) {
      slideData.current.scrollings = [];
    }
    slideData.current.last = new Date().getTime();

    // callculate delta for various events
    // add the value to scrolling
    const delta = e.deltaY || -e.wheelDelta || e.detail;
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

  const ts = useRef({ x: 0, y: 0 });
  function touchStart(e: TouchEvent) {
    ts.current.y = e.touches[0].clientY;
    ts.current.x = e.touches[0].clientX;
  }

  const wait = useRef(0);
  const touchMove = (e: TouchEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    e.preventDefault();
    var teX = e.changedTouches[0].clientX;
    var te = e.changedTouches[0].clientY;

    if (Math.abs(ts.current.x - teX) > Math.abs(ts.current.y - te)) {
      if (ts.current.x > teX + 50 && curr === 1) {
        slideRight();
      } else if (ts.current.x < teX - 50 && curr === 1) {
        slideLeft();
      }
    } else {
      if (ts.current.y > te + 60) {
        slideDown();
      } else if (ts.current.y < te - 60) {
        slideUp();
      }
    }
  };

  const slideRight = () => {
    setAboutState("aboutMe");
  };

  const slideLeft = () => {
    setAboutState("skills");
  };

  const nav = (val: string) => {
    Scroll.scroller.scrollTo(val, {
      duration: 1000,
      containerId: "App",
      smooth: "easeInOutQuart",
      offset: 0,
      ignoreCancelEvents: true,
    });
  };

  const slideDown = (val: "one" | "all" = "one") => {
    slideData.current.last = new Date().getTime();
    if (slideData.current.last - slideData.current.prev < 1000) return;
    if (curr < appTable.length - 1 && val === "one") {
      slideData.current.prev = slideData.current.last;
      setCurr((prv) => prv + 1);
    } else if (curr !== appTable.length - 1 && val === "all") {
      setCurr(appTable.length - 1);
    } else {
      return;
    }
  };

  const slideUp = (val: "one" | "all" = "one") => {
    slideData.current.last = new Date().getTime();
    if (slideData.current.last - slideData.current.prev < 1000) return;
    if (curr > 0 && val === "one") {
      slideData.current.prev = slideData.current.last;
      nav(appTable[curr - 1]);
      setCurr((prv) => prv - 1);
    } else if (curr !== 0 && val === "all") {
      nav(appTable[0]);
      setCurr(0);
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
    if (e.code === "ArrowRight") slideRight();
    else if (e.code === "ArrowLeft") slideLeft();
  };

  const resize = () => {
    // setState(appTable[curr]);
    Scroll.scroller.scrollTo(appTable[curr], {
      duration: 1500,
      containerId: "App",
      smooth: "easeInQuint",
      offset: 0,
      ignoreCancelEvents: true,
    });
  };
  const handleState = (newVal: string) => {
    setCurr(appTable.indexOf(newVal) >= 0 ? appTable.indexOf(newVal) : 0);
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
    if (window.WheelEvent) document.body.addEventListener("wheel", slide);
    else {
      document.body.addEventListener("DOMMouseScroll", slide);
      document.body.addEventListener("mousewheel", slide);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("keyup", keyNav);
    document.body.addEventListener("touchstart", touchStart);
    document.body.addEventListener("touchmove", touchMove);
    return () => {
      document.body.removeEventListener("wheel", slide);
      document.body.removeEventListener("mousewheel", slide);
      document.body.removeEventListener("DOMMouseScroll", slide);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keyup", keyNav);
      document.body.removeEventListener("touchstart", touchStart);
      document.body.removeEventListener("touchmove", touchMove);
    };
  });

  useEffect(() => {
    nav(appTable[curr]);
  }, [curr]);

  return (
    <div
      ref={ref}
      id="App"
      className="App absolute overflow-hidden w-full h-full"
    >
      <Header />
      <Drama handleState={handleState} state={appTable[curr]} />
      <About />
      <Element
        name="projects"
        id="projects"
        className="text-white overflow-hidden w-full h-full"
      >
        Projects
      </Element>
      <Contact />

      <Footer linkState={appTable[curr]} handleState={handleState} />
    </div>
  );
}
