export default function SectionMantras() {
  return (
    <>
      {/* Left Corner */}
      <div
        className="
          absolute
          left-4
          top-4
          z-20
          hidden
          lg:block
          text-left
          text-[11px]
          text-yellow-200/70
          leading-relaxed
          max-w-[300px]
          vvSmall-text
        "
      >
        श्रीमन्नित्यनिकुञ्जबिहारिणे नम: !!
      </div>

      {/* Right Corner */}
      <div
        className="
          absolute
          right-4
          top-4
          z-20
          hidden
          lg:block
          text-right
          text-[11px]
          text-yellow-200/70
          leading-relaxed
          max-w-[300px]
          vvSmall-text
        "
      >
        ॥ श्रीस्वामी हरिदासो विजयतेतराम् ॥
      </div>
    </>
  );
}