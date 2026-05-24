import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { translations } from "../src/translations";

export default function CountdownSection({ language }) {
  const t = translations[language].countdown;

  const weddingDate = new Date("2026-06-27T16:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    return {
      days: Math.max(
        Math.floor(difference / (1000 * 60 * 60 * 24)),
        0
      ),

      hours: Math.max(
        Math.floor((difference / (1000 * 60 * 60)) % 24),
        0
      ),

      minutes: Math.max(
        Math.floor((difference / 1000 / 60) % 60),
        0
      ),

      seconds: Math.max(
        Math.floor((difference / 1000) % 60),
        0
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      label: t.days,
      value: timeLeft.days,
    },

    {
      label: t.hours,
      value: timeLeft.hours,
    },

    {
      label: t.minutes,
      value: timeLeft.minutes,
    },

    {
      label: t.seconds,
      value: timeLeft.seconds,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1a0909] px-6 py-28 text-white">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >

        <p className="vladmir medium-text mb-4 text-xs text-yellow-300">
          {t.sectionTag}
        </p>

        <h2 className="vladmir medium-text text-5xl text-white">
          {t.heading}
        </h2>

        <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="wedding-title medium-text margin25px text-yellow-200">
                {item.value}
              </div>

              <p className="elegant-text vvSmall-text mt-4 tracking-[0.3em] text-stone-300">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </motion.div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#120606]" />

    </section>
  );
}