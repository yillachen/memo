import React from 'react';
import firebase from '../firebase'
const auth = firebase.auth();

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img className="pfp" src={photoURL} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
