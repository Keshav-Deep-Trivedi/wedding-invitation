import { motion } from "framer-motion";
import mandala from "../src/assets/effects/mandala.png";

export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0909] to-[#120606] py-16">

      {/* Top Fade */}
      <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-transparent to-[#120606]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-transparent to-[#120606]" />

      {/* Ambient Glow */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Divider Lines */}
      <div className="absolute left-0 h-[1px] w-[35%] bg-gradient-to-r from-transparent to-yellow-300/40" />

      <div className="absolute right-0 h-[1px] w-[35%] bg-gradient-to-l from-transparent to-yellow-300/40" />

      {/* Rotating Mandala */}
      <motion.img
        src={mandala}
        alt="divider"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          relative
          z-10
          w-24
          opacity-80
          drop-shadow-[0_0_30px_rgba(255,215,0,0.2)]
        "
      />

    </div>
  );
}