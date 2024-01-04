import Image from "next/image";
import me from "../assets/me2.jpg";
import pdf from "../assets/pdf.svg";
import docx from "../assets/docx.svg";
import { motion } from "framer-motion";

export const Sec2 = () => {
  return (
    <div className="relative  flex flex-col justify-center items-center w-[90%] mx-auto max-w-[60rem] min-h-[100vh]">
      <div>
        <h1 className="text-shadow mb-20 text-5xl sm:text-6xl text-center text-prim  ">
          About Me
        </h1>
        <div className="sm:max-w-full md:space-x-5 space-x-0 text-white flex flex-col md:flex-row justify-between  bg-black/50  w-full shadow-3xl rounded-lg lg:rounded-full">
          <motion.div
            initial={{ filter: "blur(100px)" }}
            whileInView={{
              filter: "blur(0)",
              transition: { duration: 1 },
            }}
            className="w-full flex items-center"
          >
            <Image
              className="mx-auto object-cover h-full max-h-[25rem] w-full rounded-lg lg:rounded-full"
              src={me}
              alt=""
            />
          </motion.div>
          <div className="md:max-w-[60%] ">
            <div className=" overflow-clip">
              <div className="w-full sm:p-2 p-0 text-xl sm:text-lg">
                <br />
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
              </div>
            </div>
            <div className="text-white flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 items-center md:space-x-2 space-x-0">
              <motion.a
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 50px -10px #ad0b00",
                }}
                href={"SeifEleslam Gouda (Frontend Developer).pdf?"}
                target="_blank"
                className="mx-auto md:mx-0 space-x-2 flex items-center w-fit  px-4 py-2 font-bold rounded-full bg-[#ad0b00] "
              >
                <Image
                  src={pdf}
                  className="w-[2.5rem] inline-block"
                  alt="resume"
                />
                <p>Resume | pdf</p>
              </motion.a>
              <motion.a
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 50px -10px #0057bb",
                }}
                href={"SeifEleslam Gouda (Frontend Developer).docx?"}
                target="_blank"
                className="mx-auto md:mx-0 space-x-2 flex items-center w-fit  px-4 py-2 font-bold rounded-full bg-[#0057bb] "
              >
                <Image
                  src={docx}
                  className="w-[2.5rem] inline-block"
                  alt="resume"
                />
                <p>Resume | docx</p>
              </motion.a>
            </div>
            <br />
          </div>
        </div>
        <div className="rounded-full shaow-xxl mx-auto "></div>
      </div>
    </div>
  );
};
