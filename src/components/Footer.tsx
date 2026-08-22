import { Heart, Share2, MessageCircle, Wifi } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "#1B1C26" }}
      className="py-12 px-4"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo / couple name */}
        <div>
          <p
            style={{ fontFamily: "'Dancing Script', cursive", color: "#BD93F9", fontSize: "2rem" }}
          >
            Ilham &amp; Reffi
          </p>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#C3C8DC", fontSize: "0.78rem", letterSpacing: "0.16em" }}
            className="uppercase tracking-widest mt-1"
          >
            27 · 08 · 2026 · Cijeungjing, Padalarang, Bandung Barat
          </p>
        </div>

        {/* Divider */}
        <div className="ornament-line w-48" style={{ color: "#BD93F9" }}>
          <span style={{ fontSize: "0.8rem" }}>✦</span>
        </div>

        {/* Quote */}
        <p
          style={{ fontFamily: "'Playfair Display', serif", color: "#F8F8F2", fontSize: "0.95rem", fontStyle: "italic", maxWidth: 380, lineHeight: 1.7 }}
        >
          "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri."
        </p>
        <p
          style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(189,147,249,0.7)", fontSize: "0.78rem" }}
        >
          — QS. Ar-Rum: 21
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { Icon: MessageCircle, label: "WhatsApp" },
            { Icon: Share2, label: "Bagikan" },
            { Icon: Wifi, label: "Live Stream" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              style={{
                background: "rgba(189,147,249,0.12)",
                border: "1px solid rgba(189,147,249,0.3)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
                color: "#BD93F9",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(189,147,249,0.25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(189,147,249,0.12)")}
            >
              <Icon size={17} />
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(162,166,191,0.5)", fontSize: "0.73rem" }}
          className="flex items-center gap-1"
        >
          &copy; {year} · Dibuat dengan{" "}
          <Heart size={11} fill="#FF79C6" color="#FF79C6" aria-hidden="true" />
          {" "}untuk Ilham &amp; Reffi
        </p>
      </div>
    </footer>
  );
}
