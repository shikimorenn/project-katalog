import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Detail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!product) return <h1 className="text-center py-20">Product Not Found</h1>;

  return (
    <motion.div
      ref={ref}
      className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            }
          : {}
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              }
            : {}
        }
      >
        <img
          src={product.img}
          className="w-full h-96 object-cover border shadow"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.35, ease: "easeOut" },
              }
            : {}
        }
      >
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

        <p className="line-through text-gray-400">{product.oldPrice}</p>
        <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>

        <h3 className="font-bold mb-2">DESCRIPTION</h3>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <h3 className="font-bold mb-2">FEATURES</h3>
        <ul className="list-disc pl-6 space-y-1">
          {product.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Detail;
