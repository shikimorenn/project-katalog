import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/slendrina.jpg";
import img2 from "../assets/nascar.jpg";
import img3 from "../assets/animefight.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Section = () => {
  const products = [
    {
      id: 1,
      title: "Slendrina 4 Horror Classic Games",
      desc: "Face the terror again. Step into the darkness and survive the nightmare.",
      oldPrice: "Rp. 270.000",
      price: "Rp. 250.000",
      img: img1,
    },
    {
      id: 2,
      title: "Nascar Racing Online",
      desc: "Race online against real drivers in high-speed NASACAR competition.",
      oldPrice: "Rp. 175.000",
      price: "Rp. 150.000",
      img: img2,
    },
    {
      id: 3,
      title: "Fighting Anime 3D Online",
      desc: "Enter the arena. Join warriors worldwide in fast, explosive 3D anime battles.",
      oldPrice: "Rp. 150.000",
      price: "Rp. 100.000",
      img: img3,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-black mb-3"
        >
          Check Out Our Latest Finds
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <div className="w-24 h-[4px] bg-red-600"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <Link to={`/detail/${p.id}`}>
                <div
                  className="
                    group bg-white border-2 border-black
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                    hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    rounded-none hover:-translate-y-2
                  "
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="px-6 py-5">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-center">
                      {p.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 text-center line-clamp-3">
                      {p.desc}
                    </p>

                    <div className="mb-6 text-center">
                      <p className="text-gray-400 line-through text-sm mb-1">
                        {p.oldPrice}
                      </p>
                      <p className="text-xl font-bold text-red-600 tracking-tight">
                        {p.price}
                      </p>
                    </div>

                    <div className="flex justify-center gap-3">
                      <button className="px-5 py-2 border-2 border-black text-sm text-black rounded-none font-medium group-hover:bg-black group-hover:text-white transition">
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

export default Section;
