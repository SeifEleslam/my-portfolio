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
          rotate: -45,
          filter: "blur(0)",
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={`scale-75 sm:scale-100 h-20 shadow-gold rotate-45 z-10 w-20 absolute -bottom-10 left-0 right-0 mx-auto bg-prim`}
      >
        <div className="w-full h-full scale-75 rotate-45">
          <AnimatePresence>
            <Icon icon={index} key={index} />
          </AnimatePresence>
        </div>
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
      exit={{ y: -100, opacity: 0 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Image src={state[icon]} alt={""} />
    </motion.div>
  );
};
