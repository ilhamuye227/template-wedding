import { useRef } from "react";
import { motion } from "framer-motion";
import { useThreeScene } from "../hooks/useThreeScene";

export default function FloralAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  useThreeScene({ container: containerRef.current });

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #1B1C26 0%, #282A36 45%, #343746 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
        paddingBottom: 80,
      }}
      className="flex flex-col items-center"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(189,147,249,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 px-4 relative z-10"
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#BD93F9",
            fontSize: "1.3rem",
          }}
          className="mb-2"
        >
          Mekar dalam cinta
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "#F8F8F2",
          }}
        >
          Bunga Cinta Kami
        </h2>
      </motion.div>

      {/* Three.js canvas container */}
      <div
        ref={containerRef}
        style={{ width: "100%", maxWidth: 520, height: 360 }}
        aria-label="Animasi bunga 3D interaktif"
        role="img"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#C3C8DC",
          fontSize: "1.1rem",
          textAlign: "center",
          maxWidth: 400,
        }}
        className="mt-8 px-4 relative z-10"
      >
        "Cinta itu sabar, cinta itu baik hati, tidak cemburu, tidak memegahkan diri dan tidak sombong."
      </motion.p>

      {/* Wave top */}
      <svg
        viewBox="0 0 1440 60"
        style={{ position: "absolute", top: -1, left: 0, right: 0, fill: "#282A36" }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" />
      </svg>

      {/* Wave bottom */}
      <svg
        viewBox="0 0 1440 60"
        style={{ position: "absolute", bottom: -1, left: 0, right: 0, fill: "#282A36" }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}
