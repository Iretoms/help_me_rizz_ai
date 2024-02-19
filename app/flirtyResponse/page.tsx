"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatProps } from "@/types";

const FlirtyResponse = () => {
  const [myMessage, setMyMessage] = useState("");
  const [theirMessage, setTheirMessage] = useState("");
  const [messages, setMessages] = useState<ChatProps[]>([]);

  const addMyMessage = () => {
    if (myMessage.trim() !== "") {
      setMessages([
        ...messages,
        { messages: [], text: myMessage, position: "right" },
      ]);
      setMyMessage("");
    }
  };

  const addTheirMessage = () => {
    if (theirMessage.trim() !== "") {
      setMessages([
        ...messages,
        { messages: [], text: theirMessage, position: "left" },
      ]);
      setTheirMessage("");
    }
  };

  return (
    <div className="flex justify-center items-start gap-10 px-10">
      <div className="flex flex-col gap-10 mt-20 w-[40%]">
        <div className="flex flex-col md:flex-row gap-10  items-center space-x-2">
          <Input
            className="text-white border-opacity-20 rounded-xl border-white placeholder:opacity-30"
            type="text"
            placeholder="Enter your message....."
            value={myMessage}
            onChange={(e) => setMyMessage(e.target.value)}
          />
          <Button
            className="bg-white px-6 rounded-xl hover:text-white"
            onClick={addMyMessage}
          >
            Add to chat
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-10  items-center space-x-2">
          <Input
            className="text-white border-opacity-20 rounded-xl border-white placeholder:opacity-30"
            type="text"
            placeholder="Enter their message....."
            value={theirMessage}
            onChange={(e) => setTheirMessage(e.target.value)}
          />
          <Button
            className="bg-white px-6 rounded-xl hover:text-white"
            onClick={addTheirMessage}
          >
            Add to chat
          </Button>
        </div>
        <Button className="bg-white px-6 rounded-xl hover:text-white">
          Generate flirty Response
        </Button>
      </div>
      <div className="hidden md:block">
        <div className="relative w-[40vw]">
          <Image
            src="/iphone.svg"
            alt="iPhone"
            width={300}
            height={300}
            className="object-contain w-[100%]"
          />
          <div className="absolute w-[20rem] right-[8rem] top-[8rem] max-h-[40rem] bg-[#18181B] overflow-y-scroll p-2 flex flex-col justify-start gap-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex p-2 rounded-2xl w-full ${
                  message.position === "right" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.position === "right"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  } flex items-center rounded-2xl`}
                  style={{
                    flexDirection:
                      message.position === "right" ? "row-reverse" : "row",
                  }}
                >
                  <p className="text-white font-extrabold text-sm py-2 px-6">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlirtyResponse;
