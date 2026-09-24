"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from "lucide-react";

export default function VideoShowcase3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until interaction
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Subtle 3D mouse tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setTilt({ x: y * 4, y: x * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="showcase-video" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono mb-4">
            <Film className="w-3.5 h-3.5" />
            CINEMATIC ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Modern Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A high-velocity showcase of our digital systems, autonomous agent pipelines, and custom web builds.
          </p>
        </div>

        {/* 3D Video Frame */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="relative max-w-4xl mx-auto rounded-3xl p-2 sm:p-3 glass-panel border border-orange-500/20 shadow-2xl shadow-orange-500/10 group"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-soft-cyan/15 rounded-full blur-3xl pointer-events-none" />

          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner">
            <video
              ref={videoRef}
              src="/digizier-promo.mp4"
              poster="/video-poster.jpg"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onClick={togglePlay}
            />

            {/* Overlaid Status Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DIGIZIER 4K SHOWCASE
            </div>

            {/* Play Overlay if paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-300 hidden sm:inline-block">
                  Optimized 24 FPS • Universal WebGL
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
