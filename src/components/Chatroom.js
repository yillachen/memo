import React from "react";
import ChatMessage from "./ChatMessage";
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../firebase";
const auth = firebase.auth();
const firestore = firebase.firestore();

function ChatRoom() {
  const scroll = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {messages &&
        messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={scroll}></span>
      <div className="form">
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="messageBar"
          />
          <button type="submit" className="send">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

export default ChatRoom;
