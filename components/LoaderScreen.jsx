import { motion, AnimatePresence } from "framer-motion";
import mandala from "../src/assets/effects/mandala.png";

export default function LoaderScreen({ loading }) {
  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-b from-[#1a0909] to-[#120606]
          "
        >

          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Rotating Mandala */}
            <motion.img
              src={mandala}
              alt="mandala"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                w-[240px]
                opacity-80
                drop-shadow-[0_0_40px_rgba(255,215,0,0.25)]
              "
            />

            {/* Sanskrit Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [10, 0, 10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                elegant-text
                mt-10
                vSmall-text
                text-sm
                uppercase
                tracking-[0.5em]
                text-yellow-200
              "
            >
              मंगल विवाह उत्सव
            </motion.p>

            {/* Blessing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                mt-6
                text-center
                text-stone-300
              "
            >
              
            </motion.p>

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}