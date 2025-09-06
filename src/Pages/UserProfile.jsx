//import from react
import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
//import from firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
// importing from firebase.js
import { auth } from "../firebase.js";
//import from react toast
import { toast } from "react-toastify";
// importing image not available image from assets folder
import NoImg from "../assets/No_Image_Available.jpg";

function UserProfile() {
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout user
  const handleLogout = async () => {
    await signOut(auth);
    toast.success("User logged out!", { autoClose: 2000 });
  };

  // this show when no user available
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">No user logged in</p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md transition duration-300">
        {/* User Info */}
        <div className="flex flex-col items-center text-center">
          {/* User img   */}
          <img
            src={user.photoURL || NoImg}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <p className="text-gray-400 mt-4">{user.email}</p>
        </div>
        {/* LogOut button */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
          >
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
