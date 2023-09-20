"use client";

import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";
import { useForm } from "@formspree/react";
import { SetStateAction, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwkjgaaw");
  const [message, setMessage] = useState("");
  const [emailHover, setEmailHover] = useState(false);
  const [emailCopyMessage, setEmailCopyMessage] = useState("Copy Email");

  function handleMessageChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setMessage(event.target.value);
  }

  return (
    <motion.div className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 font-light">
      <motion.div className="flex flex-col h-60 space-y-2 overflow-scroll snap-end">
        <motion.div className="relative rounded-2xl rounded-bl-none bg-neutral-800 text-neutral-100 w-fit">
          <motion.div className="px-4 py-2">
            Hey there! What&apos;s on your mind?
          </motion.div>
        </motion.div>
        <motion.div className="relative rounded-2xl rounded-tl-none bg-neutral-800 text-neutral-100 w-fit">
          <motion.div className="px-4 py-2">
            (Please include your email in the message as well)
          </motion.div>
        </motion.div>
        {state.submitting && (
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
        )}
        {state.succeeded && (
          <motion.div className="relative self-end rounded-2xl bg-indigo-500 text-neutral-100 w-fit">
            <motion.div className="px-4 py-2">{message}</motion.div>
          </motion.div>
        )}
        {state.succeeded && (
          <motion.div className="relative rounded-2xl lg:rounded-full bg-neutral-800 text-neutral-100 w-fit">
            <motion.div className="px-4 py-2">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {!state.succeeded && (
        <motion.form
          onSubmit={handleSubmit}
          className="relative flex flex-row space-x-4 justify-between rounded-full border border-neutral-500 px-2 py-2"
        >
          <motion.input
            id="message"
            type="message"
            name="message"
            placeholder="Write here..."
            value={message}
            onChange={handleMessageChange}
            className="lg:flex-grow px-2 placeholder:text-neutral-500 bg-transparent border-none focus:border-0 focus:ring-offset-0 focus:ring-0 focus:border-none focus:outline-none resize-none"
          ></motion.input>
          {/* <motion.div className="absolute right-8 bg-gradient-to-r from-transparent to-neutral-900 w-10 z-20"></motion.div> */}
          <motion.button
            aria-label="send button"
            disabled={state.submitting}
            type="submit"
            className="rounded-full flex flex-row justify-center items-center bg-indigo-600 p-2"
          >
            <BsArrowUp />
          </motion.button>
        </motion.form>
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
        <motion.div className="w-full border-t border-t-neutral-100"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
