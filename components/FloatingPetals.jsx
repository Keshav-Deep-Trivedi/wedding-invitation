import { motion } from "framer-motion";
import petal from "../src/assets/effects/petal.png";

const petals = [...Array(18)];

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">

      {petals.map((_, i) => {
        const size = 20 + Math.random() * 28;

        return (
          <motion.img
            key={i}
            src={petal}
            alt="petal"
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
              rotate: 0,
              opacity: 0.7,
            }}
            animate={{
              y: window.innerHeight + 200,
              x:
                Math.random() * window.innerWidth +
                Math.sin(i) * 120,
              rotate: 360,
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8,
            }}
            style={{
              width: size,
              position: "absolute",
              filter: "drop-shadow(0 0 12px rgba(255,200,200,0.25))",
            }}
          />
        );
      })}
    </div>
  );
}