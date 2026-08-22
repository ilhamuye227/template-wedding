import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Heart } from "lucide-react";

export default function Invitation() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      style={{ background: "#282A36" }}
      className="py-20 px-4 flex flex-col items-center"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p
          style={{ fontFamily: "'Dancing Script', cursive", color: "#FF79C6", fontSize: "1.4rem" }}
          className="mb-2"
        >
          Dengan penuh kebahagiaan
        </p>
        <h2 className="section-title">Kartu Undangan</h2>
        <div className="ornament-line max-w-xs mx-auto mt-4">
          <span style={{ fontSize: "1rem" }}>✦</span>
        </div>
        <p
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#9BA0B6", fontSize: "0.9rem" }}
          className="mt-4"
        >
          Klik kartu untuk melihat detail
        </p>
      </motion.div>

      {/* Flip Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flip-card w-full max-w-lg ${flipped ? "flipped" : ""}`}
        style={{ height: 480 }}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-pressed={flipped}
        aria-label="Kartu undangan — klik untuk membalik"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        <div className="flip-card-inner">
          {/* FRONT */}
          <div
            className="flip-card-front"
            style={{
              background:
                "linear-gradient(145deg, #343746 0%, #282A36 45%, #1B1C26 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 32px",
            }}
          >
            {/* Gold border frame */}
            <div
              style={{
                position: "absolute",
                inset: 16,
                border: "1px solid rgba(189,147,249,0.5)",
                borderRadius: 16,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 20,
                border: "1px solid rgba(189,147,249,0.2)",
                borderRadius: 12,
                pointerEvents: "none",
              }}
            />

            {/* Corner ornaments */}
            {["top-4 left-4", "top-4 right-4 rotate-90", "bottom-4 left-4 -rotate-90", "bottom-4 right-4 rotate-180"].map(
              (pos, i) => (
                <span
                  key={i}
                  style={{ position: "absolute", color: "#BD93F9", fontSize: "1.4rem" }}
                  className={pos}
                  aria-hidden="true"
                >
                  ✦
                </span>
              )
            )}

            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#BD93F9",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
              }}
              className="mb-4 relative z-10"
            >
              Undangan Pernikahan
            </p>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F8F8F2",
                fontSize: "clamp(2rem, 6vw, 3rem)",
                lineHeight: 1.15,
                textShadow: "0 2px 16px rgba(189,147,249,0.35)",
              }}
              className="text-center relative z-10"
            >
              Ilham Supriadi &amp; Reffi Ajeng Raishabila
            </h3>

            <div
              style={{ color: "#BD93F9", fontSize: "1.6rem", margin: "12px 0" }}
              className="relative z-10"
              aria-hidden="true"
            >
              ❦
            </div>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#C3C8DC",
                fontSize: "0.9rem",
                letterSpacing: "0.18em",
              }}
              className="uppercase tracking-widest relative z-10"
            >
              27 · 08 · 2026
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "rgba(248,248,242,0.55)",
                fontSize: "0.75rem",
              }}
              className="absolute bottom-8 relative z-10"
            >
              Sentuh untuk detail →
            </p>
          </div>

          {/* BACK */}
          <div
            className="flip-card-back"
            style={{
              background:
                "linear-gradient(145deg, #2E3040 0%, #282A36 50%, #2E3040 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "36px 28px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 16,
                border: "1px solid rgba(189,147,249,0.4)",
                borderRadius: 16,
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#FF79C6",
                fontSize: "1.1rem",
              }}
              className="mb-1 relative z-10"
            >
              Dengan rahmat Allah SWT
            </p>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F8F8F2",
                fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                lineHeight: 1.2,
              }}
              className="text-center mb-4 relative z-10"
            >
              Ilham Supriadi &amp; Reffi Ajeng Raishabila
            </h3>

            <div className="flex items-center gap-2 mb-5 relative z-10">
              <Heart size={14} fill="#BD93F9" color="#BD93F9" aria-hidden="true" />
              <span style={{ color: "#BD93F9", fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em" }} className="uppercase tracking-wider">
                Menikah
              </span>
              <Heart size={14} fill="#BD93F9" color="#BD93F9" aria-hidden="true" />
            </div>

            {/* Date & Time */}
            <div
              style={{
                background: "rgba(189,147,249,0.1)",
                border: "1px solid rgba(189,147,249,0.3)",
                borderRadius: 12,
                padding: "14px 24px",
                width: "100%",
                marginBottom: 12,
              }}
              className="flex items-center gap-3 relative z-10"
            >
              <Clock size={18} color="#BD93F9" aria-hidden="true" />
              <div>
                <p
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F8F8F2", fontSize: "1rem", fontWeight: 600 }}
                >
                  Kamis, 27 Agustus 2026
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#9BA0B6", fontSize: "0.8rem" }}>
                  09.00 WIB — Selesai
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                background: "rgba(98,114,164,0.08)",
                border: "1px solid rgba(98,114,164,0.25)",
                borderRadius: 12,
                padding: "14px 24px",
                width: "100%",
                marginBottom: 16,
              }}
              className="flex items-start gap-3 relative z-10"
            >
              <MapPin size={18} color="#FF79C6" className="mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F8F8F2", fontSize: "1rem", fontWeight: 600 }}
                >
                  Cijeungjing
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#9BA0B6", fontSize: "0.8rem" }}>
                  Padalarang, Bandung Barat, Jawa Barat
                </p>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#6272A4",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
              className="relative z-10"
            >
              "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
