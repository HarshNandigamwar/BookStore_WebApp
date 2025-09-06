import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
//import from react
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// importing pages
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AddBookPage from "./Pages/AddBook";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
// importing from firebase.js
import { messaging } from "./firebase";
//import from firebase
import { getToken, onMessage } from "firebase/messaging";
//importing from protectedRoute.jsx
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  // Firebase Notification setup
  useEffect(() => {
    Notification.requestPermission().then(async (perm) => {
      if (perm === "granted") {
        await getToken(messaging, {
          vapidKey: process.env.FIREBASE_VAPID_KEY,
        });
      }
    });
    onMessage(messaging, (payload) => {
      alert(payload.notification?.title);
    });
  }, []);

  return (
    <div>
      {/* Header   */}
      <Header />
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/loginpage" />} />

        {/* Public routes */}
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addbook"
          element={
            <ProtectedRoute>
              <AddBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <hr />
      {/* Footer   */}
      <Footer />
    </div>
  );
};

export default App;
