import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import fluteMusic from "../src/assets/audio/Flute.mp3";

export default function MusicPlayer({ startMusic }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (startMusic && audioRef.current) {

      const audio = audioRef.current;

      audio.currentTime = 8.5;

      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => { });

    }
  }, [startMusic]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={fluteMusic} type="audio/mp3" />
      </audio>

      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-yellow-300/30
          bg-black/40
          text-2xl
          text-yellow-200
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(255,215,0,0.25)]
          margin-right: 10px
        "
      >
        {playing ? "♫" : "♪"}
        <div className="flex items-center gap-1" style={{ marginLeft: "5px" }} >

          <div className="music-bar h-3 w-1 rounded-full bg-yellow-300" />
          <div className="music-bar h-4 w-1 rounded-full bg-yellow-300" />
          <div className="music-bar h-2 w-1 rounded-full bg-yellow-300" />

        </div>
      </motion.button>
    </>
  );
}