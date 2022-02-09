import React from 'react';
import firebase from '../firebase'
const auth = firebase.auth();

function SignIn() {
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={googleSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
