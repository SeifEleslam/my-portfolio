import Image from "next/image";
import me from "../assets/me2.jpg";
import resumeico from "../assets/resume.svg";
import { motion } from "framer-motion";

export const Sec2 = () => {
  return (
    <div className="relative  flex flex-col justify-center items-center w-[90%] mx-auto max-w-[60rem] min-h-[100vh]">
      <div>
        <h1 className="text-shadow mb-20 text-5xl sm:text-6xl text-center text-prim  ">
          About Me
        </h1>
        <div className="sm:max-w-full text-white flex flex-col sm:flex-row justify-between items-center space-x-4 space-y-4 bg-black/50  w-full shadow-3xl rounded-lg sm:rounded-full">
          <motion.div
            initial={{ filter: "blur(200px)" }}
            whileInView={{
              filter: "blur(0)",
              transition: { duration: 1 },
            }}
            className="w-full"
          >
            <Image
              className="mx-auto object-cover max-h-[25rem] w-full rounded-lg sm:rounded-full"
              src={me}
              alt=""
            />
          </motion.div>
          <div className="sm:max-w-[60%] ">
            <div className=" overflow-clip">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                className="w-full sm:p-2 p-0 text-xl sm:text-lg"
              >
                <p className="text-prim text-3xl">Hello There, </p>
                <br />
                <p>
                  My name is SeifEleslam. <br /> I am a junior front-end
                  developer with the required UI/UX design knowledge. I have a
                  significant focus on the details. I am seeking a perfectly
                  designed user interface with the best possible performance to
                  provide a remarkable user experience.
                </p>
                <br />
              </motion.div>
            </div>
            <motion.a
              whileHover={{
                y: -10,
                boxShadow: "0 10px 50px -10px #d8b15d",
              }}
              href={"/resume.pdf"}
              target="_blank"
              className="mx-auto sm:mx-0 text-black space-x-2 flex items-center w-fit  px-4 py-2 font-bold rounded-full grdprim "
            >
              <Image
                src={resumeico}
                className="w-[2.5rem] inline-block"
                alt="resume"
              />
              <p>My Resume</p>
            </motion.a>
            <br />
          </div>
        </div>
        <div className="rounded-full shaow-xxl mx-auto "></div>
      </div>
    </div>
  );
};
