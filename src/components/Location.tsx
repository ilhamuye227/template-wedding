import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d107.47!3d-6.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e1c000000001%3A0x1!2sPadalarang%2C+Cijeungjing%2C+Bandung+Barat!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid";

  return (
    <section style={{ background: "#282A36" }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            Hadir dan do&#39;akan kami
          </p>
          <h2 className="section-title">Lokasi Pernikahan</h2>
          <div className="ornament-line max-w-xs mx-auto mt-4">
            <span style={{ fontSize: "1rem" }}>✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: "linear-gradient(145deg, #343746 0%, #232533 100%)",
              borderRadius: 20,
              padding: "36px 28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                position: "absolute",
                width: 200,
                height: 200,
                borderRadius: "50%",
                border: "1px solid rgba(189,147,249,0.2)",
                top: -60,
                right: -60,
              }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  background: "rgba(189,147,249,0.2)",
                  borderRadius: 12,
                  padding: 10,
                }}
              >
                <MapPin size={22} color="#BD93F9" aria-hidden="true" />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#F8F8F2", fontSize: "1.4rem" }}
              >
                Venue
              </h3>
            </div>

            <p
              style={{ fontFamily: "'Playfair Display', serif", color: "#BD93F9", fontSize: "1.3rem", fontWeight: 600 }}
              className="mb-2"
            >
              Gedung Serbaguna
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#C3C8DC", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Jl. Cijeungjing No. 1<br />
              Padalarang, Bandung Barat<br />
              Jawa Barat 40553
            </p>

            <div
              style={{
                height: 1,
                background: "rgba(189,147,249,0.25)",
                margin: "20px 0",
              }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-3">
              <Clock size={18} color="#BD93F9" aria-hidden="true" />
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#C3C8DC", fontSize: "0.85rem" }}>
                  Kamis, 27 Agustus 2026
                </p>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "#BD93F9", fontSize: "1rem", fontWeight: 600 }}>
                  09.00 WIB — Selesai
                </p>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=Padalarang+Cijeungjing+Bandung+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 mt-6"
              aria-label="Buka petunjuk arah di Google Maps"
              style={{ textDecoration: "none", fontSize: "0.85rem" }}
            >
              <Navigation size={15} aria-hidden="true" />
              Petunjuk Arah
            </a>
          </motion.div>

          {/* Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "2px solid rgba(189,147,249,0.3)",
              boxShadow: "0 8px 40px rgba(12,13,18,0.15)",
              height: 340,
              background: "#313342",
            }}
          >
            <iframe
              title="Peta Lokasi Pernikahan Ilham & Reffi"
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
