import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";
import curtainTexture from "../src/assets/images/curtains.jpg";
import "./CurtainIntro.css"

export default function CurtainIntro({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Ambient Golden Glow */}
      <div className="absolute inset-0">

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/20 blur-3xl" />

        {/* Left Glow */}
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-yellow-300/10 blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-yellow-200/30 blur-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: opened ? "-100%" : 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="curtain curtain-left"
        style={{ backgroundImage: `url(${curtainTexture})` }}
      >
        {/* <div className="absolute inset-0 bg-black/35" />
        <div className="absolute right-0 top-0 h-full w-16 bg-black/40 blur-xl" /> */}

      </motion.div>


      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: opened ? "100%" : 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="curtain curtain-right"
        style={{ backgroundImage: `url(${curtainTexture})` }}
      >
        {/* <div className="absolute inset-0 bg-black/35" />
        <div className="absolute left-0 top-0 h-full w-16 bg-black/40 blur-xl" /> */}

      </motion.div>

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400 opacity-60" />

      {/* Open Button */}
      {!opened && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handleOpen}
            className="open-button"
          >
            Open Invitation
          </button>
        </div>
      )}
    </div>
  );
}