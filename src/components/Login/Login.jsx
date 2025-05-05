import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Please Login</h1>
      {/* <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      )}
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Login;
