import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Users, MessageSquare, UtensilsCrossed, User } from "lucide-react";

interface FormData {
  nama: string;
  jumlahTamu: string;
  dietKhusus: string;
  pesan: string;
}

interface FormErrors {
  nama?: string;
  jumlahTamu?: string;
}

export default function RSVP() {
  const [form, setForm] = useState<FormData>({
    nama: "",
    jumlahTamu: "1",
    dietKhusus: "",
    pesan: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.nama.trim()) e.nama = "Nama wajib diisi";
    if (!form.jumlahTamu || Number(form.jumlahTamu) < 1) e.jumlahTamu = "Minimal 1 tamu";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(68,71,90,0.3)",
    border: "1.5px solid rgba(189,147,249,0.35)",
    borderRadius: 12,
    padding: "12px 16px 12px 44px",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.9rem",
    color: "#D6D9E4",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #282A36 0%, #313342 50%, #282A36 100%)",
      }}
      className="py-20 px-4"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            style={{ fontFamily: "'Dancing Script', cursive", color: "#FF79C6", fontSize: "1.4rem" }}
            className="mb-2"
          >
            Konfirmasi kehadiran
          </p>
          <h2 className="section-title">RSVP</h2>
          <div className="ornament-line max-w-xs mx-auto mt-4">
            <span style={{ fontSize: "1rem" }}>✦</span>
          </div>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#9BA0B6", fontSize: "0.85rem" }}
            className="mt-4"
          >
            Kehadiran Anda adalah kebahagiaan kami
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{
                background: "linear-gradient(145deg, #343746 0%, #232533 100%)",
                borderRadius: 24,
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <CheckCircle size={56} color="#BD93F9" className="mx-auto mb-4" aria-hidden="true" />
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#F8F8F2", fontSize: "1.8rem" }}
                className="mb-3"
              >
                Terima Kasih!
              </h3>
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "#BD93F9", fontSize: "1.2rem" }}
                className="mb-3"
              >
                {form.nama}
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#C3C8DC", fontSize: "0.9rem" }}>
                Konfirmasi kehadiran Anda telah kami terima. Kami sangat senang dapat merayakan momen bahagia ini bersama Anda.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: "#2E3040",
                borderRadius: 24,
                padding: "36px 28px",
                boxShadow: "0 8px 40px rgba(12,13,18,0.1)",
                border: "1px solid rgba(189,147,249,0.2)",
              }}
            >
              {/* Nama */}
              <div className="mb-5">
                <label
                  htmlFor="nama"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#FF79C6", fontWeight: 600, display: "block", marginBottom: 6, letterSpacing: "0.06em" }}
                >
                  NAMA LENGKAP *
                </label>
                <div style={{ position: "relative" }}>
                  <User size={16} color="#BD93F9" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} aria-hidden="true" />
                  <input
                    id="nama"
                    type="text"
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    placeholder="Nama Anda"
                    style={{ ...inputStyle, borderColor: errors.nama ? "#FF5555" : "rgba(189,147,249,0.35)" }}
                    aria-required="true"
                    aria-describedby={errors.nama ? "nama-error" : undefined}
                  />
                </div>
                {errors.nama && (
                  <p id="nama-error" style={{ color: "#FF5555", fontSize: "0.78rem", marginTop: 4, fontFamily: "'Montserrat', sans-serif" }}>
                    {errors.nama}
                  </p>
                )}
              </div>

              {/* Jumlah Tamu */}
              <div className="mb-5">
                <label
                  htmlFor="tamu"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#FF79C6", fontWeight: 600, display: "block", marginBottom: 6, letterSpacing: "0.06em" }}
                >
                  JUMLAH TAMU *
                </label>
                <div style={{ position: "relative" }}>
                  <Users size={16} color="#BD93F9" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} aria-hidden="true" />
                  <input
                    id="tamu"
                    type="number"
                    min="1"
                    max="10"
                    value={form.jumlahTamu}
                    onChange={(e) => setForm({ ...form, jumlahTamu: e.target.value })}
                    style={{ ...inputStyle, borderColor: errors.jumlahTamu ? "#FF5555" : "rgba(189,147,249,0.35)" }}
                    aria-required="true"
                    aria-describedby={errors.jumlahTamu ? "tamu-error" : undefined}
                  />
                </div>
                {errors.jumlahTamu && (
                  <p id="tamu-error" style={{ color: "#FF5555", fontSize: "0.78rem", marginTop: 4, fontFamily: "'Montserrat', sans-serif" }}>
                    {errors.jumlahTamu}
                  </p>
                )}
              </div>

              {/* Diet Khusus */}
              <div className="mb-5">
                <label
                  htmlFor="diet"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#FF79C6", fontWeight: 600, display: "block", marginBottom: 6, letterSpacing: "0.06em" }}
                >
                  DIET KHUSUS
                </label>
                <div style={{ position: "relative" }}>
                  <UtensilsCrossed size={16} color="#BD93F9" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} aria-hidden="true" />
                  <input
                    id="diet"
                    type="text"
                    value={form.dietKhusus}
                    onChange={(e) => setForm({ ...form, dietKhusus: e.target.value })}
                    placeholder="Vegetarian, Halal, dll. (opsional)"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Pesan */}
              <div className="mb-7">
                <label
                  htmlFor="pesan"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#FF79C6", fontWeight: 600, display: "block", marginBottom: 6, letterSpacing: "0.06em" }}
                >
                  UCAPAN &amp; DO&#39;A
                </label>
                <div style={{ position: "relative" }}>
                  <MessageSquare size={16} color="#BD93F9" style={{ position: "absolute", left: 14, top: 14 }} aria-hidden="true" />
                  <textarea
                    id="pesan"
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    placeholder="Ucapan bahagia untuk pengantin..."
                    rows={3}
                    style={{ ...inputStyle, paddingTop: 12, resize: "vertical" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full flex items-center justify-center gap-2 min-h-[48px]"
                aria-busy={loading}
              >
                {loading ? (
                  <span style={{ fontFamily: "'Montserrat', sans-serif" }}>Mengirim...</span>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" />
                    <span>Konfirmasi Kehadiran</span>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
