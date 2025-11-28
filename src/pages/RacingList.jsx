import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import img1 from "../assets/slendrina.jpg";
import img2 from "../assets/nascar.jpg";
import img3 from "../assets/animefight.jpg";

const RacingList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: 1,
      title: "Racing Asphalt Turbo",
      desc: "Balapan kecepatan tinggi dengan mobil sport premium.",
      oldPrice: "Rp. 220.000",
      price: "Rp. 180.000",
      img: img2,
    },
    {
      id: 2,
      title: "Night Drift Legends",
      desc: "Drift di jalanan malam dengan kontrol realistis.",
      oldPrice: "Rp. 200.000",
      price: "Rp. 150.000",
      img: img3,
    },
    {
      id: 3,
      title: "Ultimate Rally Offroad",
      desc: "Taklukkan medan ekstrem dengan kendaraan offroad.",
      oldPrice: "Rp. 210.000",
      price: "Rp. 160.000",
      img: img1,
    },
    {
      id: 4,
      title: "Urban Street Action",
      desc: "Beat up gangs, dominate the streets with your fighting combo.",
      oldPrice: "Rp. 190.000",
      price: "Rp. 140.000",
      img: img1,
    },
    {
      id: 5,
      title: "Action Dragon Slash",
      desc: "Master the sword, slay ancient dragons, and conquer kingdoms.",
      oldPrice: "Rp. 210.000",
      price: "Rp. 170.000",
      img: img2,
    },
    {
      id: 6,
      title: "Action Apocalypse Raid",
      desc: "Survive waves of zombies and mutants in a chaotic world.",
      oldPrice: "Rp. 220.000",
      price: "Rp. 180.000",
      img: img3,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-black mb-3">
          Racing Games Collection
        </h2>

        <div className="flex justify-center mb-14">
          <div className="w-24 h-[4px] bg-red-600"></div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.15,
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
            >
              <Link to={`/detail/${p.id}`}>
                <div
                  className="
                    group
                    bg-white 
                    border-2 border-black
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                    hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    hover:-translate-y-2
                    rounded-none
                    cursor-pointer
                    flex flex-col h-full
                  "
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover"
                  />

                  <div className="px-4 sm:px-5 py-5 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-center">
                      {p.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 text-center line-clamp-3">
                      {p.desc}
                    </p>

                    <div className="mb-6 text-center">
                      <p className="text-gray-400 line-through text-sm mb-1">
                        {p.oldPrice}
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-red-600 tracking-tight">
                        {p.price}
                      </p>
                    </div>

                    <div className="flex justify-center gap-2 sm:gap-3 mt-auto">
                      <button className="px-4 sm:px-5 py-2 border-2 border-black text-black text-xs sm:text-sm rounded-none font-medium group-hover:bg-black group-hover:text-white transition">
                        See Detail
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacingList;
