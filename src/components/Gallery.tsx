import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  "/images/foto-01.png",
  "/images/foto-02.jpeg",
  "/images/foto-03.png",
  "/images/foto-04.png",
  "/images/foto-05.jpeg",
  "/images/foto-06.jpeg",
  "/images/foto-07.jpeg",
  "/images/foto-08.jpeg",
  "/images/foto-09.jpeg",
  "/images/foto-10.jpeg",
  "/images/foto-11.jpeg",
  "/images/foto-12.jpeg",
  "/images/foto-13.jpeg",
  "/images/foto-14.jpeg",
  "/images/foto-15.jpeg",
  "/images/foto-16.jpeg",
  "/images/foto-17.jpeg",
  "/images/foto-18.jpeg",
  "/images/foto-19.jpeg",
  "/images/foto-20.jpeg",
  "/images/foto-21.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section style={{ background: "#282A36" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
            Momen indah kami
          </p>
          <h2 className="section-title">Galeri Foto</h2>
          <div className="ornament-line max-w-xs mx-auto mt-4">
            <span style={{ fontSize: "1rem" }}>✦</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              onClick={() => setSelected(i)}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                background: "#313342",
                border: "1.5px solid rgba(189,147,249,0.2)",
                aspectRatio: "4/3",
                position: "relative",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(12,13,18,0.2)" }}
              role="button"
              tabIndex={0}
              aria-label={`Lihat foto ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
            >
              <img
                src={src}
                alt={`Foto pernikahan Ilham & Reffi ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(12,13,18,0.4) 0%, transparent 50%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="hover-overlay"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 1000,
                background: "rgba(18,19,26,0.94)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
              }}
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Tampilan foto besar"
            >
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.35, type: "spring" }}
                src={photos[selected]}
                alt={`Foto pernikahan Ilham & Reffi ${selected + 1}`}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  borderRadius: 16,
                  objectFit: "contain",
                  border: "2px solid rgba(189,147,249,0.4)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "rgba(189,147,249,0.2)",
                  border: "1px solid rgba(189,147,249,0.4)",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#BD93F9",
                }}
                aria-label="Tutup foto"
              >
                <X size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
