import { motion } from "framer-motion";

export const Sec1 = () => {
  return (
    <div className="reqa text-prim text-3xl space-y-12 relative w-full h-[100vh] flex flex-col justify-center items-center ">
      <motion.div
        initial={{ filter: "blur(200px)" }}
        whileInView={{
          filter: "blur(0)",
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="text-shadow text-center md:text-right w-full max-w-[50rem] px-12"
      >
        <h1>لأستسهلنّ الصعب أو أدرك المنى </h1>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(200px)" }}
        whileInView={{
          filter: "blur(0)",
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="text-shadow text-center md:text-left w-full max-w-[50rem] px-12"
      >
        <h1>فما انقادت الآمال إلا لصابر</h1>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(200px)" }}
        whileInView={{
          filter: "blur(0)",
          transition: { duration: 1, delay: 0.4 },
        }}
        viewport={{ once: true }}
        className="absolute top-[60%] text-left w-full max-w-[50rem] px-12"
      >
        <p className="text-lg text-gray-500"> المتنبي --</p>
      </motion.div>
    </div>
  );
};
