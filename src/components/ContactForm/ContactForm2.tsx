"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";
import { useForm } from "@formspree/react";
import { SetStateAction, useReducer, useState } from "react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import MessageItem from "./MessageItem";
import CopyEmailButton from "./CopyEmailButton";

interface State {
  currentStage: number;
  allFieldsCollected: boolean;
  name: string;
  email: string;
  message: string;
  emailCopyMessage: string;
}
type Action =
  | {
      type: "SET_FIELD_VALUE";
      field: "name" | "email" | "message";
      payload: string;
    }
  | { type: "SET_CURRENT_STAGE"; payload: number };

const initialState: State = {
  currentStage: 1,
  allFieldsCollected: false,
  name: "",
  email: "",
  message: "",
  emailCopyMessage: "Copy Email",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return { ...state, [action.field]: action.payload };
    case "SET_CURRENT_STAGE":
      return { ...state, currentStage: action.payload };
    default:
      return state;
  }
};

const ContactForm2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const messages = [
    { type: "receiver", message: "Hey there! What's your name?" },
    { type: "receiver", message: "What email can I reach you at?" },
    { type: "receiver", message: "And what's on your mind?" },
    {
      type: "receiver",
      message: "Thanks for reaching out! I'll get back to you soon",
    },
  ];

  const { currentStage, message, emailCopyMessage } = state;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field =
      currentStage === 1 ? "name" : currentStage === 2 ? "email" : "message";
    const value = event.target.value;
    const insertAt = currentStage === 1 ? 1 : currentStage === 2 ? 3 : 5;
    const insertValue = { type: "sender", message: value };
    messages.splice(insertAt, 0, insertValue);
    dispatch({ type: "SET_FIELD_VALUE", field, payload: value });

    const nextStage = currentStage + 1;
    dispatch({ type: "SET_CURRENT_STAGE", payload: nextStage });
  };

  return (
    <MotionConfig transition={{
      type: "spring",
      duration: 0.2,
      damping: 20,
      stiffness: 200,
    }}>
      <motion.div className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 font-light">
        <motion.div className="flex flex-col h-60 space-y-4 overflow-scroll snap-end">
          <motion.div className="relative rounded-2xl lg:rounded-full bg-neutral-800 text-neutral-100 w-fit">
            <motion.div className="px-4 py-2">
              Hey there! What&apos;s on your mind? (Please include your email in
              the message as well)
            </motion.div>
          </motion.div>
          {/* {state.submitting && (
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
          {messages.map((x, index) => {
            return (
              <MessageItem key={index} id={index} type={x.type}>
                {x.message}
              </MessageItem>
            );
          })}
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
              onChange={handleInputChange}
              className="lg:flex-grow px-2 placeholder:text-neutral-500 bg-transparent border-none focus:border-0 focus:ring-offset-0 focus:ring-0 focus:border-none focus:outline-none resize-none"
            ></motion.input>
            <motion.button
              aria-label="send button"
              disabled={currentStage > 3 ? true : false}
              type="submit"
              className="rounded-full flex flex-row justify-center items-center bg-blue-600 p-2"
            >
              <BsArrowUp />
            </motion.button>
          </motion.form>
        )}
       <CopyEmailButton/>
      </motion.div>
    </MotionConfig>
  );
};

export default ContactForm2;
