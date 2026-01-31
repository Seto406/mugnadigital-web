'use client';

import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Ensure volume is up (some browsers require interaction to unmute)
      audioRef.current.muted = false;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
          });
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
      />

      <button
        onClick={togglePlay}
        className={`p-3 rounded-full border transition-all duration-300 shadow-lg flex items-center justify-center
          ${isPlaying
            ? 'bg-[var(--brand-palay)] text-[var(--foreground)] border-[var(--brand-palay)]'
            : 'bg-[var(--brand-void-static)]/50 text-[var(--brand-mist-static)] border-white/10 hover:bg-[var(--brand-void-static)] hover:text-white'
          }
        `}
        aria-label={isPlaying ? "Turn off music" : "Turn on music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
