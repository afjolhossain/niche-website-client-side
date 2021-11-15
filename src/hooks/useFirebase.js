import { useEffect, useState } from "react";
import initializeFirebase from "../pages/login/firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// ....................initialize firebase.............
initializeFirebase();

//...................... useFirebase..................

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setauthError] = useState("");

  const auth = getAuth();
  // ...................register segment....................

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // sand name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   .................loginUser.........................

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //........................ observe user change......................

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //...................logout Segment................

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
  };
};
export default useFirebase;
