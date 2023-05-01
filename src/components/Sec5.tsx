import lottie from "lottie-web/build/player/lottie_light";
import { useEffect, useRef } from "react";
import mail from "../assets/mail.json";
import { Link } from "./Sec4";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
//0.85 0.69 0.36
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
        <div className="flex mt-10 justify-center items-center space-x-8">
          <Link color="#0a66c2" link="https://codepen.io/SeifEleslam">
            <FiLinkedin size={"100%"} />
          </Link>
          <Link color="#25d366" link="https://github.com/SeifEleslam">
            <BsWhatsapp size={"100%"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
