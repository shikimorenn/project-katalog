import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gameabout1.jpg";
import img2 from "../assets/gameabout2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-red-500 mb-3"
        >
          About Us
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-10 md:mb-16"
        >
          <div className="w-24 md:w-28 h-[4px] bg-black"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              src={img1}
              className="w-[80%] md:w-[420px] h-auto object-cover rounded-xl shadow-xl relative z-20"
              alt="Front"
            />
            <img
              src={img2}
              className="absolute w-[80%] md:w-[420px] h-auto object-cover rounded-xl shadow-xl top-24 md:top-28 left-10 md:left-20 z-10"
              alt="Back"
            />
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/2 text-center md:text-left mt-20"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We are a digital game marketplace dedicated to bringing you a wide
              selection of high quality titles for every type of player. From
              action packed adventures to relaxing casual games, our platform
              offers a comprehensive library designed for both beginners and
              seasoned gamers.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With competitive prices, secure transactions, and a smooth
              browsing experience, we make discovering your next favorite game
              easier than ever. Our mission is to support your gaming journey
              whether you're exploring new worlds, competing online, or
              collecting classic titles. Gaming is our passion, and we’re here
              to be part of every experience, achievement, and adventure you
              create.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
