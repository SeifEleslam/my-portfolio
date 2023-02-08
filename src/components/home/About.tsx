import { Element } from "react-scroll";
import Image from "next/image";
import aboutImg from "../../images/about.jpg";
import { m } from "framer-motion";

export default function About() {
  // useEffect(() => {
  //   if (state !== "about") {
  //     setAboutState("aboutMe");
  //     setExpand(false);
  //   }
  // }, [state]);
  const variants1 = {
    show: { y: 0 },
    hide: { y: "-120%" },
  };
  const variants2 = {
    show: { opacity: 1 },
    hide: { opacity: 0 },
  };
  const variants3 = {
    show: { y: 0 },
    hide: { y: "50vh" },
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
      name="about"
      id="about"
      className="relative overflow-hidden w-full h-full "
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
          src={aboutImg}
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
          "backdrop-blur flex flex-col justify-center bg-[#272b33]/75 w-fit md:ml-[10vw] mx-auto translate-y-[-70%] overflow-hidden mb-[6vh] shadow-3xl p-2 max-w-[90%] min-h-[50vh]"
        }
        variants={container}
        whileInView={"show"}
        initial="hide"
      >
        <m.div
          className={
            "w-full text-center p-5  mx-auto border-b-[2px] border-[#aaa] text-left text-[#d8b15d] leading-[5vh] text-[6vh] text-shadow Alumni"
          }
          variants={variants1}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div>
            <p>Know</p>
          </div>
          <div>
            <p className="ml-[5vh]">Me</p>
          </div>
          <div>
            <p className="ml-[5vh]">Better</p>
          </div>
        </m.div>
        <div className="p-2 mx-auto w-fit ">
          <m.p
            className="py-4 mb-2 text-shadow text-[#aaa] text-2xl"
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Errors are the way of my progress
            <br />
            That's why CSS is my worst enemy
          </m.p>
          <m.button
            // href="#"
            className="p-4 mb-2 bg-[#aaa] text-[#272b33] shadow-3xl "
            variants={variants3}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              background: "#edc769",
              scale: 1.2,
              borderRadius: "50px",
              transition: { duration: 0.3, delay: 0 },
            }}
          >
            Know More
          </m.button>
        </div>
      </m.div>
    </Element>
  );
}
