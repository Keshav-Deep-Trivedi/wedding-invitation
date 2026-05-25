import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import mandala from "../src/assets/effects/mandala.png";
import ganeshImage from "../src/assets/images/Ganesh.png";
import mantraAudio from "../src/assets/audio/GaneshMantra.mp3";

export default function LoaderScreen({ loading }) {
  const [started, setStarted] = useState(false);
  const [mantraFinished, setMantraFinished] =
    useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    const audio = new Audio(mantraAudio);

    audioRef.current = audio;

    audio.play().catch(() => {
      console.log("Audio blocked");
    });

    audio.onended = () => {
      setMantraFinished(true);
    };

    return () => {
      audio.pause();
    };
  }, [started]);

  return (
    <AnimatePresence>

      {loading && !mantraFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          onClick={() => setStarted(true)}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-b
            from-[#1a0909]
            to-[#120606]
          "
        >

          {/* Ambient Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-yellow-500/10
              blur-3xl
            "
          />

          {/* Floating Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[450px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-yellow-300/10
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Ganesh Ji */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              src={ganeshImage}
              alt="Ganesh Ji"
              className="
                mb-10
                w-40
                md:w-48
                drop-shadow-[0_0_35px_rgba(255,215,0,0.35)]
              "
            />

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
                absolute
                
                left-[166px]
                w-[160px]
                opacity-10
                drop-shadow-[0_0_30px_rgba(255,215,0,0.25)]
              "
            />

            {/* Main Sanskrit Title */}
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
                mt-36
                text-sm
                uppercase
                vSmall-text
                tracking-[0.5em]
                text-yellow-200
              "
            >
              मंगल विवाह उत्सव
            </motion.p>

            {/* Mantra */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 1.5,
              }}
              className="
                scriptBold
                mt-8
                max-w-[480px]
                text-center
                small-text
                text-sm
                leading-8
                tracking-[0.10em]
                text-yellow-100
              "
            >
              Vakratunda Mahakaya
              <br />
              Suryakoti Samaprabha
              <br />
              Nirvighnam Kurume Deva
              <br />
              Sarva-Kaaryeshu Sarvada
            </motion.div>

            <br></br>

            {/* Tap Hint */}
            {!started && (
              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  mt-12
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-yellow-300
                "
              >
                Tap Anywhere To Begin
              </motion.p>
            )}

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}