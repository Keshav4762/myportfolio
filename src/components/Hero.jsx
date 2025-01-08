import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kkprofile2.jpg";
// import motion from 'framer-motion'
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              exit= {{opacity: 0, scale: 0.1,}}
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl "
            >
              Keshav Kartik Sharma
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-sky-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className=" items-center w-full lg:w-1/2 lg:p-8 ">
          <div className="flex linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) drop-shadow-2xl opacity-50 justify-center items-center">
            <motion.img
              className="flex rounded-3xl justify-center items-center "
              src={profilePic}
              alt=""
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: 1.5, duration: 1}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
