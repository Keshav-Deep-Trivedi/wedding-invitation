import { motion } from "framer-motion";
import { translations } from "../src/translations";
import SectionMantras from "../components/SectionMantras";

export default function StorySection({ language }) {
  const t = translations[language].story;

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#140707] px-6 py-28 text-white"
    >
      <SectionMantras/>

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >

        <p className="vivaldi mb-4 medium-text text-yellow-300">
          {t.sectionTag}
        </p>

        <br />

        <p className="vladmir medium-text text-5xl text-yellow-300">
          {t.heading}
        </p>

        <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

        <p className="mt-10 text-lg leading-9 text-stone-300">
          {t.paragraph1}
        </p>

        <p className="mt-8 text-lg leading-9 text-stone-300">
          {t.paragraph2}
        </p>

      </motion.div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#120606]" />

    </section>
  );
}