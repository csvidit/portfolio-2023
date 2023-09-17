"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsVolumeMuteFill,
  BsVolumeUpFill,
} from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { PiPauseFill, PiPlayFill, PiSpeakerHighFill, PiSpeakerXFill } from "react-icons/pi";

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
          alt="1989 Album Cover"
          src="/midnights.jpeg"
          fill
          className={`rounded-2xl object-scale-down aspect-square`}
        ></Image>
      </motion.div>
      <motion.div className="flex flex-col space-y-1">
        <motion.div>Lavender Haze</motion.div>
        <motion.div className="text-neutral-500">Taylor Swift</motion.div>
      </motion.div>
      <motion.div className="flex flex-row space-x-4 justify-around items-center text-xl lg:text-2xl px-4 py-2 self-center w-full bg-neutral-800 rounded-[3rem] border border-neutral-500">
        <motion.a
          href="https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=S2lBnawZTQS81vhdNut1vQ"
          className="text-neutral-500 hover:text-neutral-100 transition-all ease-in-out duration-200"
        >
          <IoIosAlbums className="" />
        </motion.a>
        {/* <BsRewindFill /> */}
        {
          <motion.button
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
        }
        {/* <BsFastForwardFill /> */}
        {
          <motion.button
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
        }
      </motion.div>
      <motion.div className="font-sans text-xs text-right text-neutral-500">
        &copy; Taylor Swift, Spotify, and others. 
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;
