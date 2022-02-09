# memo
First project using Firebase and React-Parallax. Goal: create a minimalistic super chat room accessible with Google authentication.

![memo](https://user-images.githubusercontent.com/83196290/153280393-324e922b-03c2-4e01-a84a-34765ad36ad0.gif)

### To get started:
```
git clone git@github.com:yillachen/memo.git
npm install
```

In your /src folder, create a ``firebase.js`` file and include your authentication information in this format:
```
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "YOUR INFO",
  authDomain: "YOUR INFO",
  projectId: "YOUR INFO",
  storageBucket: "YOUR INFO",
  messagingSenderId: "YOUR INFO",
  appId: "YOUR INFO",
  measurementId: "YOUR INFO"
});

export default firebase;
```

### Links
<a href="https://youtu.be/C94chBHOZjE">Video Walk-through</a><br />
