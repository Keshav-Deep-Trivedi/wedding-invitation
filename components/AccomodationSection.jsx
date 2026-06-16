import { motion } from "framer-motion";
import venueImage from "../src/assets/images/accomodation.jpg";
import { translations } from "../src/translations";
import SectionMantras from "../components/SectionMantras";

export default function VenueSection({ language }) {

    const t = translations[language].venue;

    const mapLink =
        "https://maps.google.com/?q=Dheer+Samir+Vrindavan";

    return (
        <section
            id="venue"
            className="relative overflow-hidden bg-gradient-to-b from-[#1a0909] to-[#120606] px-6 py-28 text-white"
        >
            <SectionMantras/>

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto max-w-6xl"
            >

                {/* Heading */}
                <div className="text-center">

                    <p className="vivaldi medium-text mb-4 text-xs text-yellow-300">
                        {t.sectionTag}
                    </p>

                    <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

                </div>

                {/* Venue Card */}
                <div
                    className="
            mt-20
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(0,0,0,0.35)]
            md:grid
            md:grid-cols-2
          "
                >

                    {/* Image */}
                    <div className="relative h-[320px] md:h-full">

                        <img
                            src={venueImage}
                            alt="venue"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-10">

                        <p className="vivaldi medium-text text-yellow-300">
                            {t.detailsHeading}
                        </p>

                        <h3 className="vivaldi medium-text mt-5 text-4xl text-white">
                            {t.venueName}
                        </h3>

                        <br />

                        <p className="mt-6 leading-8 text-stone-300 vvSmall-text">
                            {t.description}
                        </p>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">

                            <p className="text-yellow-200">
                                {t.city}
                            </p>

                            <p className="mt-2 text-stone-400">
                                {t.venueType}
                            </p>

                        </div>

                        {/* Directions Button */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            href={mapLink}
                            target="_blank"
                            rel="noreferrer"
                            className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-yellow-300/30
                bg-yellow-300/10
                p-6
                text-yellow-200
                shadow-[0_0_40px_rgba(255,215,0,0.15)]
              "
                        >
                            {t.directions}
                        </motion.a>

                    </div>

                </div>

            </motion.div>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#120606]" />

        </section>
    );
}