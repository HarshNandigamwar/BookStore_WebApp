//import from react
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  // Navigate to AddBook Page
  function AddBook() {
    navigate("/addbook");
  }
  // Navigate to UserProfile Page
  function User() {
    navigate("/userprofile");
  }
  return (
    <div className="m-5 ">
      <div className="border border-purple-500 rounded-2xl flex justify-between items-center p-5">
        {/* Logo  */}
        <div className="text-xl font-bold text-center ">📚 Bookstore</div>
        <div className="flex items-center gap-4">
          {/* AddBook Button   */}
          <div
            className="text-sm p-2 rounded-[8px] border border-purple-500 cursor-pointer"
            onClick={AddBook}
          >
            Add Book
          </div>
          {/* UserProfile Button   */}
          <div
            className="h-9 w-9 border-2 border-purple-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={User}
          >
            <FaUserCircle size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
