import { motion } from "framer-motion";
import { translations } from "../src/translations";
import SectionMantras from "../components/SectionMantras";

export default function EventsSection({ language }) {
  const t = translations[language].events;

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#1a0909] px-6 py-28 text-white"
    >
      <SectionMantras/>

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="vivaldi medium-text mb-4 text-xs text-yellow-300">
            {t.sectionTag}
          </p>

          <h2 className="vladmir medium-text tracking-[0.2em] text-5xl text-white">
            {t.heading}
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-yellow-300/20 md:block" />

          <div className="space-y-14">

            {t.items.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`
                  relative flex flex-col items-center
                  md:flex-row
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >

                {/* Timeline Dot */}
                <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border border-yellow-300 bg-[#2b0a0a] shadow-[0_0_20px_rgba(255,215,0,0.5)] md:block" />

                {/* Card */}
                <div className="w-full md:w-5/12">

                  <div
                    className="
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    shadow-[0_0_40px_rgba(0,0,0,0.35)]
                  "
                  >

                    <p className="elegant-text text-sm uppercase tracking-[0.3em] text-yellow-300">
                      {event.time}
                    </p>

                    <h3 className="vladmir medium-text mt-4 text-3xl text-white">
                      {event.title}
                    </h3>

                    <p className="mt-5 leading-8 text-stone-300">
                      {event.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#120606]" />

    </section>
  );
}