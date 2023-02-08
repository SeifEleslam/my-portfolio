import { Element } from "react-scroll";
import { LinkedIn, Mail } from "../svgs/Links";
import Image from "next/image";
import contactImg from "../../images/contact.jpg";
import { m } from "framer-motion";

export default function contact() {
  const variants = {
    show: { x: 0 },
    hide: { x: "-120%" },
  };
  const container = {
    show: {
      opacity: 1,
      shadow: "0 11px 41px 0 rgba(0, 0, 0, 1)",
    },
    hide: {
      opacity: 0,
      shadow: "0 11px 41px 0 rgba(0, 0, 0, 0)",
    },
  };

  return (
    <Element
      name="contact"
      id="contact"
      className="relative text-white overflow-hidden w-full h-full"
    >
      <m.div
        className={
          "md:top-[10vh] relative shadow-gold top-0 z-0  origin-left mt-[8vh] h-[60vh] mx-auto md:w-3/5 w-[95%]"
        }
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1, transition: { duration: 0.7 } }}
      >
        <Image
          priority={true}
          className="w-full h-full"
          src={contactImg}
          alt={""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <m.div
          className={`right-0 h-full top-0 z-[10] w-full absolute bg-[#282c34] origin-right`}
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0, transition: { duration: 0.5 } }}
        >
          <m.div
            className={`h-full w-full ml-0 bg-[#edc769] origin-left`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1, transition: { duration: 0.5 } }}
          ></m.div>
        </m.div>
      </m.div>
      <m.div
        className={
          "backdrop-blur bg-[#272b33]/75 w-fit md:ml-[10vw] mx-auto translate-y-[-70%] overflow-hidden mb-[6vh] shadow-3xl p-2"
        }
        whileInView={"show"}
        initial="hide"
        variants={container}
        transition={{ duration: 0.3 }}
      >
        <m.div
          className={
            "w-fit p-5  mx-auto border-b-[2px] border-[#aaa] text-left text-[#d8b15d] leading-[5vh] text-[6vh] text-shadow Alumni"
          }
          variants={variants}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="">
            <p className="">Reach</p>
          </div>
          <div className="">
            <p className="ml-[15vh]">Me</p>
          </div>
          <div className="">
            <p className="ml-[21vh]">Out</p>
          </div>
        </m.div>
        <div className="w-full ">
          <m.a
            href="mailto:seifgouda98@gmail.com"
            className={
              "origin-left mb-[5vh] mt-[5vh] w-fit text-shadow border-l-[2px] border-[#aaa]  hover p-2 flex items-center text-[#aaa] md:text-[1.6rem] text-[1.2rem]  hover:text-[#d8b15d] focus:text-[#d8b15d]"
            }
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              color: "#d8b15d",
              scale: 1.2,
              borderColor: "#d8b15d",
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            <div className="md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem] mr-2">
              <Mail />
            </div>
            SeifGouda98@gmail.com
          </m.a>
          <m.a
            href="https://www.linkedin.com/in/seifeleslam-gouda-0a5504256"
            target="_blank"
            className={
              "origin-left w-fit text-shadow border-l-[2px] border-[#aaa] hover p-2 flex items-center text-[#aaa] md:text-[1.6rem] text-[1.2rem] mb-4 focus:text-[#d8b15d] "
            }
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              color: "#d8b15d",
              scale: 1.2,
              borderColor: "#d8b15d",
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            <div className="md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem] mr-2">
              <LinkedIn />
            </div>
            LinkedIn
          </m.a>
        </div>
      </m.div>
    </Element>
  );
}
