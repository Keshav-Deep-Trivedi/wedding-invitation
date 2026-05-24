import { useState, useEffect, useMemo } from "react";

import CurtainIntro from "../components/CurtainIntro";
import StorySection from "../components/StorySection";
import EventsSection from "../components/EventsSection";
import PremiumScratchReveal from "../components/PremiumScratchReveal";
import CountdownSection from "../components/CountdownSection";
import MusicPlayer from "../components/MusicPlayer";
import GallerySection from "../components/GallerySection";
import RSVPSection from "../components/RSVPSection";
import VenueSection from "../components/VenueSection";
import FloatingNav from "../components/FloatingNav";
import SectionDivider from "../components/SectionDivider";
import LoaderScreen from "../components/LoaderScreen";
import FloatingPetals from "../components/FloatingPetals";

import heroImage from "./assets/images/hero.jpg";

import { translations } from "./translations";

import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {

  const [showMain, setShowMain] = useState(false);

  const [loading, setLoading] = useState(true);

  const [language, setLanguage] = useState("en");

  const t = translations[language];

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  const { scrollY } = useScroll();

  const heroBgY = useTransform(
    scrollY,
    [0, 1000],
    [0, 250]
  );

  const glowY = useTransform(
    scrollY,
    [0, 1000],
    [0, 120]
  );

  const textY = useTransform(
    scrollY,
    [0, 1000],
    [0, -80]
  );

  const guestName = useMemo(() => {

    const params = new URLSearchParams(window.location.search);

    return params.get("guest") || "";

  }, []);

  return (

    <div className="min-h-screen overflow-x-hidden bg-[#f5efe6]">

      <FloatingPetals />

      <LoaderScreen loading={loading} />

      <MusicPlayer startMusic={showMain} />

      <button
        onClick={() =>
          setLanguage(
            language === "en" ? "hi" : "en"
          )
        }
        className="
fixed
right-5
top-5
z-[9999]
rounded-full
border
border-yellow-300/30
bg-black/30
px-5
py-3
text-sm
text-yellow-200
backdrop-blur-2xl
shadow-[0_0_25px_rgba(255,215,0,0.15)]
transition-all
duration-300
hover:scale-105
hover:bg-yellow-300/10
"
      >
        {language === "en"
          ? "हिन्दी"
          : "English"}
      </button>

      {showMain && <FloatingNav />}

      {!loading && !showMain && (
        <CurtainIntro onOpen={() => setShowMain(true)} />
      )}

      {/* MAIN CONTENT */}

      <div
        className={`transition-all duration-1000 ${showMain
          ? "opacity-100 scale-100"
          : "opacity-0 scale-110"
          }`}
      >

        {/* HERO SECTION */}

        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
        >

          {/* HERO BACKGROUND */}

          <motion.div
            style={{
              y: heroBgY,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="
              absolute
              inset-0
              animate-slowZoom
              scale-110
              will-change-transform
            "
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#2b0a0a]/80" />

          {/* GLOW */}

          <motion.div
            style={{ y: glowY }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-yellow-400/10
              blur-3xl
            "
          />

          {/* FLOATING LIGHTS */}

          <div className="absolute inset-0 overflow-hidden">

            {[...Array(12)].map((_, i) => (

              <motion.div
                key={i}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 10, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-yellow-300/30 blur-xl"
                style={{
                  width: `${30 + i * 3}px`,
                  height: `${30 + i * 3}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />

            ))}

          </div>

          {/* HERO CONTENT */}

          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-2xl"
          >

            <div className="mb-5">


              <div
                className="
    mx-auto
    flex
    max-w-[240px]
    flex-col
    items-center
    justify-center
    text-center
    leading-[0.85]
    text-yellow-300
  "
              >
                <span
                  className="
      vivaldi
      block
      text-[3rem]
    "
                >

                  {language === "en"
                    ? "Wedding Invitation"
                    : "विवाह निमंत्रण"}

                </span>
              </div>

              <br />

              {guestName && (

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="
                    mt-5
                    vSmall-text
                    text-lg
                    italic
                    text-yellow-200
                  "
                >

                  {language === "en"
                    ? `Dear ${guestName} Ji, your presence will bless our sacred union ✨`
                    : `प्रिय ${guestName} जी, आपकी उपस्थिति हमारे पावन मिलन को आशीर्वाद प्रदान करेगी ✨`}

                </motion.p>

              )}

            </div>

            {/* NAMES */}

            <h1
              className="
                vivaldi
                text-6xl
                leading-tight
                text-white
                drop-shadow-[0_0_30px_rgba(255,215,0,0.25)]
                md:text-8xl
              "
            >

              {language === "en"
                ? "Shankar Sharma"
                : "शंकर शर्मा"}

              <span className="mx-4 text-yellow-300">
                &
              </span>

              {language === "en"
                ? "Shivangi Trivedi"
                : "शिवांगी त्रिवेदी"}

            </h1>

            <div className="mx-auto mt-6 h-[2px] w-40 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

            {/* HERO SUBTITLE */}

            <p className="mt-8 text-lg leading-8 text-stone-200">

              {language === "en"
                ? "Together with our families, we invite you to celebrate the beginning of our forever."
                : "अपने परिवारों सहित, हम आपको हमारे जीवन के इस पावन और अनंत मिलन के शुभारंभ का साक्षी बनने हेतु सादर आमंत्रित करते हैं।"}

            </p>

          </motion.div>

        </section>

        <SectionDivider />

        <StorySection language={language} />

        <SectionDivider />

        <EventsSection language={language} />

        <PremiumScratchReveal language={language} />

        <SectionDivider />

        <CountdownSection language={language} />

        {/* OPTIONAL */}
        {/* <SectionDivider /> */}
        {/* <GallerySection language={language} /> */}

        <SectionDivider />

        <VenueSection language={language} />

        <SectionDivider />

        <RSVPSection language={language} />

      </div>

    </div>
  );
}