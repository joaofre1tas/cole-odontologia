"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { site } from "@/config/site";

export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const configured = !!(site.heroVideo.mp4 || site.heroVideo.webm);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () => setEnabled(!query.matches && !connection?.saveData);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!configured || !enabled || failed) return;
    const element = video.current;
    const onVisibility = () => {
      if (document.hidden) element?.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    element?.play().catch(() => setPlaying(false));
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [configured, enabled, failed]);
  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-poster"
        />
        {configured && enabled && !failed && (
          <video
            ref={video}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/hero-poster.jpg"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          >
            {site.heroVideo.webm && (
              <source src={site.heroVideo.webm} type="video/webm" />
            )}
            {site.heroVideo.mp4 && (
              <source
                src={site.heroVideo.mp4}
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
