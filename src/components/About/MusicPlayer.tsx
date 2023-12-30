"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosAlbums } from "react-icons/io";
import {
  PiPauseFill,
  PiPlayFill,
  PiSpeakerHighFill,
  PiSpeakerXFill,
} from "react-icons/pi";
import MusicAnimation from "./MusicAnimation";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(true);
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("lavender_haze.mp3") : undefined
  );

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing]);

  return (
    <motion.div
      layout
      className={`col-span-1 row-span-2 geom w-100 h-100 flex flex-col space-y-4 rounded-[3rem] p-4 lg:p-6 bg-neutral-900`}
    >
      <motion.div
        className={`rounded-[3rem] relative w-full h-full aspect-square`}
      >
        <Image
          alt="Midnights Album Cover"
          src="/midnights.webp"
          fill
          className={`rounded-2xl object-scale-down aspect-square`}
        ></Image>
      </motion.div>
      <div className="flex flex-row items-center justify-between">
        <motion.div className="flex flex-col space-y-1">
          <motion.div>Lavender Haze</motion.div>
          <motion.div className="text-neutral-500">Taylor Swift</motion.div>
        </motion.div>
        {playing ? (
          <AnimatePresence>
            <MusicAnimation />
          </AnimatePresence>
        ) : (
          <></>
        )}
      </div>

      <motion.div className="group flex flex-row space-x-4 justify-around items-center text-xl lg:text-2xl px-4 py-2 self-center w-full bg-neutral-950 rounded-[3rem] border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200 ease-in-out">
        <motion.a
          aria-label="Link to Taylor Swift on Spotify"
          href="https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=tlC-V2J0S5W92ZYbWdOviA"
          className="text-neutral-500 hover:text-neutral-100 transition-all ease-in-out duration-200"
        >
          <IoIosAlbums className="" />
        </motion.a>

        <motion.button
          aria-label="Song Play/Pause Button"
          className="text-xl lg:text-2xl"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {!playing && (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                  }}
                  layout
                >
                  <PiPlayFill />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {playing && (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    duration: 0.01,
                  }}
                  layout
                >
                  <PiPauseFill />
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </motion.button>

        <motion.button
          aria-label="Volume Mute Button"
          className="text-xl lg:text-2xl text-neutral-500 hover:text-neutral-100 transition-all duration-200 ease-in-out"
          onClick={() => {
            setVolume(!volume);
            if (audioRef.current != undefined) {
              audioRef.current.muted = !audioRef.current.muted;
            }
          }}
        >
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {!volume && (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                  }}
                  layout
                >
                  <PiSpeakerXFill />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {volume && (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    duration: 0.01,
                  }}
                  layout
                >
                  <PiSpeakerHighFill />
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </motion.button>
      </motion.div>
      <motion.div
        className="text-xs text-right text-neutral-500"
        style={{ fontStretch: "90%" }}
      >
        &copy; Taylor Swift, Universal Music Group, et al.
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;
