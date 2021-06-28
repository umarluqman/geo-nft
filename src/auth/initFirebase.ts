import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export default initFirebase;
