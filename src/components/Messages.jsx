import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { data } = useContext(ChatContext);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
			doc.exists() && setMessages(doc.data().messages);
		});

		return () => {
			unsub();
		};
	}, [data.chatId]);

	return (
		<div className="messages">
			{messages.map((message) => (
				<Message key={message.id} message={message} />
			))}
		</div>
	);
};

export default Messages;
