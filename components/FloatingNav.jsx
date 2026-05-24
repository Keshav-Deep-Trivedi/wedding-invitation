import {
  Home,
  Heart,
  CalendarDays,
  Image,
  MapPin,
  Mail,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    id: "home",
    icon: Home,
  },
  {
    id: "story",
    icon: Heart,
  },
  {
    id: "events",
    icon: CalendarDays,
  },
  {
    id: "gallery",
    icon: Image,
  },
  {
    id: "rsvp",
    icon: Mail,
  },
  {
    id: "venue",
    icon: MapPin,
  },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [showNav, setShowNav] =
    useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {

      // NAV HIDE/SHOW
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = window.scrollY;

      // ACTIVE SECTION
      let currentSection = "home";

      navItems.forEach((item) => {
        const section =
          document.getElementById(item.id);

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <=
            window.innerHeight * 0.45 &&
          rect.bottom >=
            window.innerHeight * 0.45
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`
        fixed
        bottom-5
        left-1/2
        z-[999]
        flex
        -translate-x-1/2
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-black/30
        px-4
        py-3
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-500

        ${
          showNav
            ? "translate-y-0 opacity-100"
            : "translate-y-32 opacity-0"
        }
      `}
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={index}
            onClick={() =>
              scrollToSection(item.id)
            }
            className={`
              rounded-full
              p-3
              transition-all
              duration-300

              ${
                activeSection === item.id
                  ? `
                    bg-yellow-300/20
                    text-yellow-100
                    scale-110
                    shadow-[0_0_25px_rgba(255,215,0,0.35)]
                  `
                  : `
                    text-yellow-200
                    hover:bg-yellow-300/10
                    hover:scale-110
                  `
              }
            `}
          >
            <Icon size={20} />
          </button>
        );
      })}
    </div>
  );
}