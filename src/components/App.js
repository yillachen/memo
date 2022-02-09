/* eslint-disable no-unused-vars */
import "./App.css";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./Chatroom";
import firebase from "../firebase";
import Welcome from "./Welcome";

import { useAuthState } from "react-firebase-hooks/auth";
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>memo</h1>
        {user ? <SignOut /> : <SignIn />}
      </header>
      {user ? <ChatRoom /> : <Welcome />}
    </div>
  );
}

export default App;
