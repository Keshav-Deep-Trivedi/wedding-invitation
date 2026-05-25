import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { translations } from "../src/translations";

export default function PremiumScratchReveal({ language }) {
    const t = translations[language].scratch;

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = 352;
        canvas.height = 240;

        const gradient = ctx.createLinearGradient(0, 0, 320, 190);

        gradient.addColorStop(0, "#6b2d00");
        gradient.addColorStop(0.5, "#d4a017");
        gradient.addColorStop(1, "#8b5a00");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 120; i++) {
            ctx.fillStyle = "rgba(255,255,255,0.18)";
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }

        ctx.globalCompositeOperation = "destination-out";
    }, []);

    const scratch = (x, y) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(x - rect.left, y - rect.top, 42, 0, Math.PI * 2);
        ctx.fill();

        checkReveal();
    };

    const checkReveal = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        let transparent = 0;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) transparent++;
        }

        const percent = transparent / (pixels.length / 4);

        if (percent > 0.75 && !revealed) {
            setRevealed(true);

            confetti({
                particleCount: 160,
                spread: 110,
                origin: { y: 0.6 },
            });

            canvas.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            canvas.style.opacity = "0";
            canvas.style.transform = "scale(1.05)";
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0909] to-[#120606] px-6 py-28 text-white">

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
            >

                <p className="vladmir mb-4 text-xs medium-text tracking-[0.1em] text-yellow-300">
                    {t.sectionTag}
                </p>

                <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />

                <p className="mt-8 max-w-xl leading-8 text-stone-300">
                    {t.description}
                </p>

                {/* Scratch Card */}
                <div
                    ref={containerRef}
                    className="relative mt-16 overflow-hidden rounded-[2rem] border border-yellow-300/20 bg-[#1a0909] p-4 shadow-[0_0_80px_rgba(255,215,0,0.12)]"
                >

                    {/* Revealed Content */}
                    <div className="flex h-[240px] w-[352px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#2b0a0a] to-[#ff71c4de] px-6 text-center">

                        <p className="vivaldi small-text text-xs tracking-[0.1em] text-yellow-300">
                            {t.weddingDate}
                        </p>

                        <h3 className="wedding-title mt-5 text-5xl text-white">
                            27 June 2026
                        </h3>

                        <div className="mx-auto mt-5 h-[1px] w-24 bg-yellow-300/40" />

                        <br />

                        {/* <p className="vSmall-text mt-5 text-stone-300">
                            {t.location}
                        </p> */}

                    </div>

                    {/* Scratch Layer */}
                    <canvas
                        ref={canvasRef}
                        className="
absolute
left-4
top-4
cursor-pointer
rounded-[1.5rem]
touch-none
"
                        onMouseDown={() => setIsDrawing(true)}
                        onMouseUp={() => setIsDrawing(false)}
                        onMouseMove={(e) => {
                            if (!isDrawing) return;
                            scratch(e.clientX, e.clientY);
                        }}
                        onTouchStart={() => setIsDrawing(true)}
                        onTouchEnd={() => setIsDrawing(false)}
                        onTouchMove={(e) => {
                            if (!isDrawing) return;

                            const touch = e.touches[0];
                            scratch(touch.clientX, touch.clientY);
                        }}
                    />

                </div>

                {/* Reveal Message */}
                {revealed && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-10 pinkBg"
                    >

                        <p className="text-lg text-yellow-200">
                            {t.revealMessage}
                        </p>

                    </motion.div>
                )}

            </motion.div>

        </section>
    );
}