import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionMantras from "../components/SectionMantras";

import img1 from "../src/assets/gallery/1.jpg";
import img2 from "../src/assets/gallery/2.jpg";
import img3 from "../src/assets/gallery/3.jpg";
import img4 from "../src/assets/gallery/4.jpg";
import img5 from "../src/assets/gallery/5.jpg";
import img6 from "../src/assets/gallery/6.jpg";
import img7 from "../src/assets/gallery/7.jpg";
import img8 from "../src/assets/gallery/8.jpg";
import img9 from "../src/assets/gallery/9.jpg";
import img10 from "../src/assets/gallery/10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-[#1a0909] to-[#120606] px-6 py-28 text-white">

      <SectionMantras/>

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl"
      >

        {/* Heading */}
        <div className="text-center">

          <p className="elegant-text mb-4 text-xs uppercase tracking-[0.5em] text-yellow-300">
            Cherished Moments
          </p>

          <h2 className="wedding-title text-5xl text-white">
            Gallery Of Memories
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

        </div>

        {/* Gallery Grid */}
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3">

          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              transition={{ duration: 0.4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                shadow-[0_0_40px_rgba(0,0,0,0.35)]
              "
              onClick={() => setSelected(img)}
            >

              <img
                src={img}
                alt="gallery"
                className="
                  h-[260px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                to-transparent
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              " />

            </motion.div>
          ))}

        </div>

      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-6
            "
          >

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selected}
              alt="fullscreen"
              className="
                max-h-[90vh]
                rounded-[2rem]
                object-contain
                shadow-[0_0_80px_rgba(255,215,0,0.15)]
              "
            />

          </motion.div>
        )}

      </AnimatePresence>
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#120606]" />
    </section>
  );
}