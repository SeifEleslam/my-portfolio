import lottie from "lottie-web/build/player/lottie_light";
import { useEffect, useRef } from "react";
import mail from "../assets/mail.json";
import { Link } from "./Sec4";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export const Sec5 = () => {
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    lottie.loadAnimation({
      container: document.querySelector("#mail")!,
      animationData: mail,
      loop: false,
      autoplay: false,
    });
  }, []);
  return (
    <div className="relative min-h-[100vh] flex justify-center items-center">
      <div className="">
        <h1 className="text-shadow mb-10 text-5xl sm:text-6xl text-center text-prim  ">
          Reach Me Out
        </h1>
        <a
          href="mailto:seifgouda98@gmail.com"
          onMouseOver={() => {
            lottie.setDirection(1);
            lottie.play();
          }}
          onMouseLeave={() => {
            lottie.setDirection(-1);
            lottie.play();
          }}
          className="flex w-fit space-x-2 hover:shadow-gold1 duration-500 mx-auto border-[1px] border-prim px-4 py-2 rounded-xl justify-center items-center"
        >
          <div className="w-12" id="mail"></div>
          <p className="text-2xl text-prim"> Mail Me</p>
        </a>
        <div className="flex mt-10 justify-center items-center space-x-12">
          <Link
            color="#0a66c2"
            link="https://www.linkedin.com/in/seifeleslam-gouda/"
          >
            <FiLinkedin size={"100%"} />
          </Link>
          <Link
            color="#25d366"
            link="https://api.whatsapp.com/send?phone=+201090974996&text=Hi"
          >
            <BsWhatsapp size={"100%"} />
          </Link>
        </div>
        <div className="h-[3px] w-[50%] bg-prim mx-auto my-10"></div>
        <h1 className="text-shadow mb-10 text-3xl sm:text-4xl text-center text-prim  ">
          References
        </h1>
        <p className="text-center text-white text-xl">
          Background Canvas designed and coded by{" "}
          <a
            href="https://codepen.io/tmrDevelops"
            target="_blank"
            className="text-prim border-prim border-b-[1px]"
          >
            {" "}
            Tiffany Rayside
          </a>
        </p>
        <p className="text-center text-white text-2xl">
          Here is the original{" "}
          <a
            href="https://codepen.io/tmrDevelops/pen/avrZjr?editors=1010"
            target="_blank"
            className="text-prim border-prim border-b-[1px]"
          >
            {" "}
            Canvas Project
          </a>
        </p>
      </div>
    </div>
  );
};
