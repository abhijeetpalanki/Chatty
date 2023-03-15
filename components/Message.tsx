"use client";

import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isAssistant = message.user.name === "Chatty";

  return (
    <div className={`py-5 text-white ${isAssistant && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        {message.text.role === "assistant" ? (
          <p className="pt-1 text-sm">{message.text.content}</p>
        ) : (
          <p className="pt-1 text-sm">{message.text}</p>
        )}
      </div>
    </div>
  );
}

export default Message;
