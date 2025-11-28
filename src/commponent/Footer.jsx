import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../assets/logotekno.JPEG";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full bg-white border-t py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <motion.div
            variants={fadeLeft}
            className="flex flex-col items-center md:items-start"
          >
            <img src={logo} alt="Logo" className="w-16 mb-4" />
            <p className="text-gray-600 text-center md:text-left">
              © 2025 Shikimorenn. All Rights Reserved.
            </p>
          </motion.div>

          <div className="flex-1 hidden md:block"></div>
          <motion.div
            variants={fadeRight}
            className="flex flex-row justify-center gap-16 mt-10
            md:mt-0 md:flex-row md:justify-end"
          >
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-3 text-center md:text-left">
                SOCIAL MEDIA
              </h3>
              <ul className="space-y-2 text-gray-600 text-center md:text-left">
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-900">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-900">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-900">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-3 text-center md:text-left">
                ADDRESS
              </h3>
              <ul className="space-y-2 text-gray-600 text-center md:text-left">
                <li>Vila Pertiwi</li>
                <li>Jl. in Aja dulu</li>
                <li>Siapa tau cocok</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
