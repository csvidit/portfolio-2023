"use client";

import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem";
import InlineButton from "../Index/InlineButton";
import SecondaryButton from "../SecondaryButton";

const systemMessages = [
  "Hey there! What's your name?",
  "What is your email?",
  "What's on your mind?",
  "Thanks for reaching out! I'll get back to you soon.",
  "There was a problem sending this. Please try again later.",
];

const ContactForm2 = () => {
  const [focus, setFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [stage, setStage] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([systemMessages[0]]);
  const [emailHover, setEmailHover] = useState(false);
  const [emailCopyMessage, setEmailCopyMessage] = useState("Copy Email");

  function handleMessageChange(event: { target: { value: string } }) {
    setCurrentMessage(event.target.value);
  }

  const bottomRef = useRef(null);

  useEffect(() => {
    if (focus) {
      const elem = document.getElementById("bottom");
      elem?.scrollIntoView({ behavior: "smooth" });
    }

    const handleSubmit = async () => {
      const nextStage = stage + 1;
      setIsLoading(true);
      const res = await axios
        .post("/api/contact", {
          name: messages[1],
          email: messages[3],
          message: messages[5],
        })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setSucceeded(true);
          setStage(nextStage);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setSucceeded(true);
          setStage(nextStage);
        });
    };

    if (stage == 3) {
      handleSubmit();
    }
  }, [focus, messages, stage]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") handleButtonClick();
  };

  const handleButtonClick = () => {
    const nextStage = stage + 1;
    setStage(nextStage);
    setMessages((prevMessages) => [...prevMessages, currentMessage]);
    setCurrentMessage("");
    setMessages((prevMessages) => [...prevMessages, systemMessages[nextStage]]);
  };

  return (
    <motion.div
      id="form-root"
      className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 font-light"
    >
      <motion.div className="flex flex-col h-60 space-y-4 overflow-scroll snap-end">
        {messages.map((x, index) => {
          return (
            <MessageItem
              id={index}
              key={index}
              type={index % 2 === 0 ? "system" : "user"}
            >
              {x}
            </MessageItem>
          );
        })}
        <div id="bottom" ref={bottomRef}></div>
      </motion.div>

      {/* {isLoading && (
        <ThreeDots
          height="20"
          width="20"
          radius="9"
          color="#737373"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )} */}
      {!succeeded && !isLoading && (
        <motion.div
          className={`relative flex flex-row space-x-4 justify-between rounded-full border border-neutral-500 px-2 py-2`}
        >
          <motion.input
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
            id="message"
            type="message"
            name="message"
            placeholder="Write here..."
            onClick={() => {
              setFocus(true);
            }}
            value={currentMessage}
            onChange={handleMessageChange}
            className="w-full grow px-2 placeholder:text-neutral-500 bg-transparent border-none focus:border-0 focus:ring-offset-0 focus:ring-0 focus:border-none focus:outline-none focus:placeholder-blue-500 resize-none caret-blue-500"
          ></motion.input>
          <motion.button
            onClick={() => handleButtonClick()}
            aria-label="message add button"
            disabled={isLoading}
            type="button"
            className="rounded-full flex flex-row justify-center items-center bg-blue-600 p-2"
          >
            <BsArrowUp />
          </motion.button>
        </motion.div>
      )}
      <motion.div className="flex flex-col space-y-2 w-fit">
        <motion.button
          onHoverStart={() => {
            setEmailHover(true);
          }}
          onHoverEnd={() => {
            setEmailHover(false);
          }}
          layout
          onClick={() => {
            navigator.clipboard.writeText("viditk17@gmail.com");
            setEmailCopyMessage("Email copied!");
          }}
          className="relative group w-fit flex flex-col items-center duration-300 ease-in-out transition-all h-[1.25rem] overflow-hidden"
        >
          <motion.div className="flex opacity-100 -translate-y-0 group-hover:-translate-y-[110%] group-hover:opacity-0 duration-300 ease-in-out">
            You can also email me.
          </motion.div>
          <motion.div className="flex opacity-0 -translate-y-0 group-hover:translate-y-[-110%] group-hover:opacity-100 duration-300 ease-in-out">
            {emailCopyMessage}
          </motion.div>
        </motion.button>
        <motion.div className={`w-full border-t ${emailHover ? "border-t-neutral-100" : "border-t-neutral-500"}`}></motion.div>
        <SecondaryButton
          variant="plain"
          href="https://calendly.com/viditkhandelwal"
          external

        >
          Let&apos;s schedule a meeting!
        </SecondaryButton>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm2;
