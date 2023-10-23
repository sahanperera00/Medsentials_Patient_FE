import { Redirect } from "expo-router";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const StartPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(getAuth().currentUser);
    });
  }, []);

  return <>{user ? <Redirect href="home" /> : <Redirect href="login" />}</>;
};

export default StartPage;
