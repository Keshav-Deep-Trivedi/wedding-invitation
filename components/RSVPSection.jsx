import { useState } from "react";
import { translations } from "../src/translations";
import SectionMantras from "../components/SectionMantras";

export default function RSVPSection({ language }) {

  const t = translations[language].rsvp;

  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="rsvp"
      className="
        relative
        bg-[#120606]
        px-6
        py-24
        text-center
      "
    >
      <SectionMantras/>

      <div className="mx-auto max-w-xl">

        <p
          className="
            vladmir
            medium-text
            text-yellow-300
          "
        >
          {t.heading}
        </p>

        <br />

        <p className="vvSmall-text mt-6 text-stone-300">
          {t.subheading}
        </p>

        {!submitted ? (
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdEcuu9ODn0tGs4khmPnI3CcPI5Lj2yTrANTAXYr6OMQ-iudA/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >

            <input
              type="text"
              name="entry.374128007"
              placeholder={t.namePlaceholder}
              required
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                text-white
                outline-none
                backdrop-blur-xl
              "
            />

            <select
              name="entry.509536768"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                text-white
                outline-none
                backdrop-blur-xl
              "
            >

              <option value={t.attending}>
                {t.attending}
              </option>

              <option value={t.notAttending}>
                {t.notAttending}
              </option>

            </select>

            <input
              type="number"
              name="entry.237150710"
              placeholder={t.guestPlaceholder}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                text-white
                outline-none
                backdrop-blur-xl
              "
            />

            <textarea
              name="entry.2007538234"
              placeholder={t.blessingPlaceholder}
              rows="4"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                text-white
                outline-none
                backdrop-blur-xl
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-2xl
                bg-yellow-300
                px-6
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              {t.button}
            </button>

          </form>
        ) : (
          <div
            className="
              mt-12
              rounded-3xl
              border
              border-yellow-300/20
              bg-yellow-300/10
              px-8
              py-10
              backdrop-blur-xl
            "
          >

            <h3
              className="
                text-3xl
                text-yellow-200
              "
            >
              {t.thankYou}
            </h3>

            <p className="mt-4 text-stone-200">
              {t.thankYouMessage}
            </p>

          </div>
        )}

        <iframe
          name="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

      </div>

    </section>
  );
}