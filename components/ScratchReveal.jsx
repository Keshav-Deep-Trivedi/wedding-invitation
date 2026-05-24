import { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import { motion } from "framer-motion";

const settings = {
  width: 320,
  height: 180,
  image:
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
  finishPercent: 45,
  brushSize: 28,
};

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0909] to-[#120606] px-6 py-28 text-white">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >

        <p className="elegant-text mb-4 text-xs uppercase tracking-[0.5em] text-yellow-300">
          Reveal The Sacred Date
        </p>

        <h2 className="wedding-title text-5xl text-white">
          Scratch To Reveal
        </h2>

        <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

        <p className="mt-8 max-w-xl leading-8 text-stone-300">
          Gently scratch the divine card to unveil the auspicious wedding date.
        </p>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#1d0a0a] p-4 shadow-[0_0_60px_rgba(255,215,0,0.08)]">

          {/* Hidden Content */}
          <div className="flex h-[180px] w-[320px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#2b0a0a] to-[#140707] text-center">

            <p className="elegant-text text-sm uppercase tracking-[0.4em] text-yellow-300">
              Wedding Date
            </p>

            <h3 className="wedding-title mt-5 text-5xl text-white">
              27 June 2026
            </h3>

            <p className="mt-4 text-stone-300">
              Vrindavan, Uttar Pradesh
            </p>

          </div>

          {/* Scratch Layer */}
          {!revealed && (
            <div className="absolute inset-0">
              <ScratchCard
                {...settings}
                onComplete={() => setRevealed(true)}
              />
            </div>
          )}

        </div>

        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-yellow-200"
          >
            The celebration awaits you ✨
          </motion.p>
        )}

      </motion.div>
    </section>
  );
}