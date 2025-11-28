import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Quest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const zoomVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative py-16 md:py-24 bg-gray-50">
      <motion.div
        ref={ref}
        variants={zoomVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-3xl lg:max-w-5xl mx-auto px-5 md:px-10"
      >
        <h2
          className="text-center font-bold text-black mb-8 leading-tight
          text-3xl md:text-4xl lg:text-5xl"
        >
          Got a Question? <br className="md:hidden" />
          We're Here to Help
        </h2>

        <div className="flex justify-center mb-10 md:mb-16">
          <div className="w-24 md:w-28 h-[4px] bg-red-600"></div>
        </div>

        <form method="POST" className="space-y-5 md:space-y-6 p-5 md:p-8">
          <input
            type="email"
            placeholder="Masukkan email Anda..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg outline-none 
            text-sm md:text-base"
          />
          <textarea
            placeholder="Tulis pesan Anda..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="w-full px-4 py-3 border rounded-lg outline-none resize-none 
            text-sm md:text-base"
          ></textarea>
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-lg 
            bg-black hover:bg-red-600 transition-all duration-200 text-sm md:text-base"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Quest;
