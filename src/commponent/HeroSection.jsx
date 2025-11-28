import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const TOTAL_TIME = 5;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          setTimeout(() => {
            setIsFinished(false);
          }, 800);

          return TOTAL_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  return (
    <section className="bg-red-600 text-white py-16 mt-14 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <motion.h2
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center leading-snug"
        >
          Time-Limited Offer!
          <br className="sm:hidden" />
          Ends In:
        </motion.h2>

        <div
          className="
          grid grid-cols-2 gap-4
          sm:grid-cols-2
          md:grid-cols-4 md:gap-6
          text-center
        "
        >
          {[
            { label: "Days", value: "00" },
            { label: "Hours", value: hrs },
            { label: "Minutes", value: mins },
            { label: "Seconds", value: secs },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isFinished
                  ? {
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.9, 1],
                    }
                  : { scale: 1, opacity: 1 }
              }
              transition={{
                duration: isFinished ? 0.6 : 0.6,
                ease: "easeOut",
              }}
              className="bg-white text-black px-6 py-4 md:px-8 md:py-6 rounded-xl shadow-md"
            >
              <p className="text-3xl md:text-4xl font-bold">{item.value}</p>
              <p className="text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
