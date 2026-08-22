import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-08-27T08:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          background: "rgba(250,246,239,0.07)",
          border: "1px solid rgba(189,147,249,0.5)",
          backdropFilter: "blur(8px)",
        }}
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl"
      >
        <span
          style={{ fontFamily: "'Playfair Display', serif", color: "#BD93F9" }}
          className="text-2xl sm:text-3xl font-bold tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#F8F8F2" }}
        className="text-xs tracking-widest mt-2 uppercase"
      >
        {label}
      </span>
    </div>
  );
}

interface HeroProps {
  onOpen: () => void;
}

export default function Hero({ onOpen }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const petals = [
    { emoji: "🌸", top: "8%", left: "5%", cls: "float-petal", size: "2.5rem" },
    { emoji: "🌹", top: "15%", right: "7%", cls: "float-petal-2", size: "2rem" },
    { emoji: "🌺", bottom: "20%", left: "8%", cls: "float-petal-3", size: "2.2rem" },
    { emoji: "🌷", top: "40%", right: "5%", cls: "float-petal-4", size: "1.8rem" },
    { emoji: "✿", bottom: "35%", right: "12%", cls: "float-petal", size: "2rem" },
    { emoji: "❀", top: "65%", left: "4%", cls: "float-petal-2", size: "1.6rem" },
    { emoji: "🌼", top: "25%", left: "20%", cls: "float-petal-3", size: "1.4rem" },
    { emoji: "🥀", bottom: "10%", right: "22%", cls: "float-petal-4", size: "1.5rem" },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(172deg, #191A23 0%, #1F2029 32%, #282A36 62%, #33364A 86%, #3F4260 100%)",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex flex-col items-center justify-center px-4 py-16"
    >
      {/* Radial glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(189,147,249,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating petals */}
      {petals.map((p, i) => (
        <div
          key={i}
          className={p.cls}
          style={{
            position: "absolute",
            fontSize: p.size,
            top: (p as any).top,
            left: (p as any).left,
            right: (p as any).right,
            bottom: (p as any).bottom,
            userSelect: "none",
            pointerEvents: "none",
            filter: "drop-shadow(0 2px 8px rgba(189,147,249,0.3))",
          }}
        >
          {p.emoji}
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#BD93F9",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            letterSpacing: "0.04em",
          }}
          className="mb-4"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ornament-line w-48 mb-6"
        >
          <span style={{ color: "#BD93F9", fontSize: "1.2rem" }}>✦</span>
        </motion.div>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 6rem)",
            lineHeight: 1.05,
            color: "#F8F8F2",
            textShadow: "0 4px 24px rgba(189,147,249,0.4)",
          }}
          className="mb-2"
        >
          Ilham Supriadi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#BD93F9",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          }}
          className="mb-2"
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 10vw, 6rem)",
            lineHeight: 1.05,
            color: "#F8F8F2",
            textShadow: "0 4px 24px rgba(189,147,249,0.4)",
          }}
          className="mb-6"
        >
          Reffi Ajeng Raishabila
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#C3C8DC",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            letterSpacing: "0.2em",
          }}
          className="uppercase tracking-widest mb-10"
        >
          27 Agustus 2026
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 sm:gap-6 mb-12"
        >
          <CountBox value={timeLeft.days} label="Hari" />
          <CountBox value={timeLeft.hours} label="Jam" />
          <CountBox value={timeLeft.minutes} label="Menit" />
          <CountBox value={timeLeft.seconds} label="Detik" />
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="btn-gold min-h-[48px]"
          onClick={onOpen}
          aria-label="Buka undangan pernikahan"
        >
          Buka Undangan ✦
        </motion.button>
      </div>

      {/* Bottom wave */}
      <svg
        viewBox="0 0 1440 80"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, fill: "#282A36" }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
