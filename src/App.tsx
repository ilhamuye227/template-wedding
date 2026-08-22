import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2 } from "lucide-react";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import FloralAnimation from "./components/FloralAnimation";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(160deg, #1B1C26 0%, #282A36 55%, #3B3E52 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#BD93F9",
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          marginBottom: 12,
          letterSpacing: "0.04em",
        }}
      >
        Undangan Pernikahan
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 10vw, 5rem)",
          color: "#F8F8F2",
          textShadow: "0 4px 24px rgba(189,147,249,0.4)",
          lineHeight: 1.1,
        }}
        className="text-center"
      >
        Ilham Supriadi &amp; Reffi Ajeng Raishabila
      </motion.h1>

      {/* Loader dots */}
      <div className="flex gap-2 mt-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#BD93F9",
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function MusicToggle({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, type: "spring" }}
      onClick={onToggle}
      aria-label={playing ? "Matikan musik" : "Putar musik"}
      aria-pressed={playing}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 500,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #FF79C6 0%, #BD93F9 100%)",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(189,147,249,0.4)",
      }}
    >
      {playing && (
        <span className="pulse-ring" aria-hidden="true" />
      )}
      {playing ? (
        <Music2 size={20} color="white" aria-hidden="true" />
      ) : (
        <Music size={20} color="white" aria-hidden="true" />
      )}
    </motion.button>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function playMusic() {
    audioRef.current?.play().then(() => setPlaying(true)).catch(() => {});
  }

  function toggleMusic() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      playMusic();
    }
  }

  function handleOpen() {
    setOpened(true);
    playMusic();
  }

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <AnimatePresence>
          {!opened ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onOpen={handleOpen} />
            </motion.div>
          ) : (
            <motion.main
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Invitation />
              <FloralAnimation />
              <Location />
              <RSVP />
              <Gallery />
              <Footer />
            </motion.main>
          )}
        </AnimatePresence>
      )}

      <audio
        ref={audioRef}
        src="/audio/nanti-kita-seperti-ini.m4a"
        loop
        preload="auto"
      />

      <MusicToggle playing={playing} onToggle={toggleMusic} />
    </>
  );
}
