import { motion, AnimatePresence } from "framer-motion";
import ara from "../assets/arabic.svg";
import suit from "../assets/suit.svg";
import work from "../assets/work.svg";
import contact from "../assets/contact.svg";
import Image from "next/image";
import skills from "../assets/skills.svg";

export const Navbar = ({ index }: { index: number }) => {
  return (
    <div className="fixed top-0 w-full h-16 text-white z-50">
      <motion.div
        initial={{ scale: 0, rotate: 0, filter: "blur(200px)" }}
        whileInView={{
          scale: 1,
          rotate: 360,
          filter: "blur(0)",
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={` h-16 rounded-full w-16 sm:h-20 shadow-gold1  z-10 sm:w-20 absolute sm:-bottom-10 -bottom-8 left-0 right-0 mx-auto bg-prim`}
      >
        <div className="bg-prim w-full h-full rounded-full">
          <div className="z-10 w-full h-full scale-75">
            <AnimatePresence>
              <Icon icon={index} key={index} />
            </AnimatePresence>
          </div>
        </div>

        <motion.div className="absolute z-[-10] w-full h-full rounded bg-bgprim left-0 top-0 border-prim border-[3px] rotate-45"></motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
        className={`left-0 right-0 mx-auto rounded-full absolute -bottom-[1.5px] w-[50%] min-w-[30px] h-[3px] bg-prim`}
      ></motion.div>
    </div>
  );
};

const Icon = ({ icon }: { icon: number }) => {
  const state = [ara, suit, skills, work, contact];
  return (
    <motion.div
      className="w-full absolute left-0 top-0 h-full"
      exit={{
        rotate: -180,
        opacity: 0,
        transition: { duration: 0.5, type: "tween" },
      }}
      initial={{
        rotate: 180,
        opacity: 0,
      }}
      animate={{
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.5, type: "tween" },
      }}
    >
      <Image src={state[icon]} alt={""} />
    </motion.div>
  );
};
