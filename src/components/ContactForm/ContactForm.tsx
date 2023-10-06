"use client";

import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import MessageItem from "./MessageItem";

const systemMessages = [
  "Hey there! What's your name?",
  "What is your email?",
  "What's on your mind?",
  "Thanks for reaching out! I'll get back to you soon.",
  "There was a problem sending this. Please try again later.",
];

interface State {
  isLoading: boolean;
  succeeded: boolean;
  stage: number; // 1 for name, 2 for email, 3 for message
  currentMessage: string;
  messages: string[]; // even ones are from me, odd ones are from the user
  emailHover: boolean;
  emailCopyMessage: string;
}

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_SUCCEEDED"; payload: boolean }
  | { type: "SET_STAGE"; payload: number }
  | { type: "UPDATE_MESSAGE"; payload: string }
  | { type: "ADD_MESSAGE"; payload: string }
  | { type: "SET_EMAIL_HOVER"; payload: boolean }
  | { type: "SET_EMAIL_COPY_MESSAGE"; payload: string };

const initialState: State = {
  isLoading: false,
  succeeded: false,
  stage: 0,
  currentMessage: "",
  messages: [systemMessages[0]],
  emailHover: false,
  emailCopyMessage: "Copy Email",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SUCCEEDED":
      return { ...state, succeeded: action.payload };
    case "SET_STAGE":
      return { ...state, stage: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, currentMessage: action.payload };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_EMAIL_HOVER":
      return { ...state, emailHover: action.payload };
    case "SET_EMAIL_COPY_MESSAGE":
      return { ...state, emailCopyMessage: action.payload };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    isLoading,
    succeeded,
    stage,
    messages,
    currentMessage,
    emailHover,
    emailCopyMessage,
  } = state;

  function handleMessageChange(event: { target: { value: string } }) {
    dispatch({ type: "UPDATE_MESSAGE", payload: event.target.value });
  }

  const handleButtonClick = () => {
    console.log("STAGE VALUE IN HANDLE BUTTON CLICK", stage);
    const nextStage = stage + 1;
    dispatch({ type: "SET_STAGE", payload: nextStage });
    dispatch({ type: "ADD_MESSAGE", payload: currentMessage });
    dispatch({ type: "UPDATE_MESSAGE", payload: "" });
    dispatch({ type: "ADD_MESSAGE", payload: systemMessages[nextStage] });
    console.log("MESSAGES IN BUTTON CLICK", messages)
    console.log("STAGE VALUE AFTER DISPATCH", stage);
    if (nextStage == 3) {
      handleSubmit();
    }
    console.log("STAGE VALUE AFTER SWITCH", stage);
  };

  const handleSubmit = async () => {
    console.log("INSIDE HANDLE SUBMIT");
    const nextStage = stage + 1;
    dispatch({ type: "SET_LOADING", payload: true });
    console.log("MESSAGES IN HANDLE SUBMIT", messages)
    await axios
      .post("/api/contact", {
        name: messages[1],
        email: messages[3],
        message: messages[5],
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_SUCCEEDED", payload: true });
        dispatch({ type: "SET_STAGE", payload: nextStage });
        // dispatch({ type: "ADD_MESSAGE", payload: systemMessages[stage] });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_SUCCEEDED", payload: true });
        dispatch({ type: "SET_STAGE", payload: nextStage });
        // dispatch({ type: "ADD_MESSAGE", payload: systemMessages[stage + 1] });
      });
  };

  return (
    <motion.div className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 font-light">
      <motion.div className="flex flex-col h-60 space-y-4 overflow-scroll snap-end">
        {messages.map((x, index) => {
          return (
            <MessageItem
              id={index}
              key={index}
              type={index % 2 == 0 ? "system" : "user"}
            >
              {x}
            </MessageItem>
          );
        })}
      </motion.div>
      {isLoading && (
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
      {!succeeded && !isLoading && (
        <motion.form className="relative flex flex-row space-x-4 justify-between rounded-full border border-neutral-500 px-2 py-2">
          <motion.input
            id="message"
            type="message"
            name="message"
            placeholder="Write here..."
            value={currentMessage}
            onChange={handleMessageChange}
            className="w-full grow px-2 placeholder:text-neutral-500 bg-transparent border-none focus:border-0 focus:ring-offset-0 focus:ring-0 focus:border-none focus:outline-none resize-none"
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
        </motion.form>
      )}
      <motion.div className="flex flex-col space-y-2 w-fit">
        <motion.button
          onHoverStart={() => {
            dispatch({ type: "SET_EMAIL_HOVER", payload: true });
          }}
          onHoverEnd={() => {
            dispatch({ type: "SET_EMAIL_HOVER", payload: false });
          }}
          layout
          onClick={() => {
            navigator.clipboard.writeText("viditk17@gmail.com");
            dispatch({
              type: "SET_EMAIL_COPY_MESSAGE",
              payload: "Email copied!",
            });
            // setEmailCopyMessage("Email copied!");
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
