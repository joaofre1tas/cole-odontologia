"use client";
import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { site } from "@/config/site";

const MOBILE = "(max-width: 767px)";
const POSTER = "/images/hero-poster.jpg";
const MOBILE_POSTER = "/images/hero-poster-mobile.jpg";

export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const mobileVideo = mobile && site.heroVideo.mobileMp4;
  const mp4 = mobileVideo || site.heroVideo.mp4;
  const webm = mobileVideo ? "" : site.heroVideo.webm;
  const configured = !!(mp4 || webm);
  const common = { alt: "", fill: true, sizes: "100vw" } as const;
  const {
    props: { srcSet: mobilePoster },
  } = getImageProps({ ...common, src: MOBILE_POSTER });
  const { props: poster } = getImageProps({
    ...common,
    src: POSTER,
    loading: "eager",
    fetchPriority: "high",
  });
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.matchMedia(MOBILE);
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () => {
      setEnabled(!motion.matches && !connection?.saveData);
      setMobile(small.matches);
    };
    update();
    motion.addEventListener("change", update);
    small.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      small.removeEventListener("change", update);
    };
  }, []);
  useEffect(() => {
    if (!configured || !enabled || failed) return;
    const element = video.current;
    if (!element) return;
    // O React não escreve o atributo muted, e o iOS só inicia sozinho vídeo mudo.
    element.muted = true;
    element.defaultMuted = true;
    const gestures = ["touchstart", "touchend", "click", "keydown"] as const;
    const removeGestures = () =>
      gestures.forEach((type) => document.removeEventListener(type, unlock));
    const unlock = (event: Event) => {
      if ((event.target as Element | null)?.closest?.(".video-toggle")) {
        removeGestures();
        return;
      }
      element.play().then(removeGestures, () => {});
    };
    const onVisibility = () => {
      if (document.hidden) element.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    element.play().catch(() => {
      setPlaying(false);
      // Autoplay bloqueado (ex.: Modo Pouca Energia do iPhone): inicia no primeiro toque.
      gestures.forEach((type) =>
        document.addEventListener(type, unlock, { passive: true }),
      );
    });
    return () => {
      removeGestures();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [configured, enabled, failed, mp4]);
  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source media={MOBILE} srcSet={mobilePoster} sizes="100vw" />
          <img {...poster} className="hero-poster" />
        </picture>
        {configured && enabled && !failed && (
          <video
            key={mp4}
            ref={video}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={mobileVideo ? MOBILE_POSTER : POSTER}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          >
            {webm && <source src={webm} type="video/webm" />}
            {mp4 && (
              <source
                src={mp4}
                type="video/mp4"
                onError={() => setFailed(true)}
              />
            )}
          </video>
        )}
      </div>
      {configured && enabled && !failed && (
        <button
          type="button"
          className="video-toggle"
          onClick={() => {
            if (playing) video.current?.pause();
            else video.current?.play().catch(() => setFailed(true));
          }}
          aria-label={
            playing ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"
          }
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
          <span>{playing ? "Pausar" : "Reproduzir"}</span>
        </button>
      )}
    </>
  );
}
