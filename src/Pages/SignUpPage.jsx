//import from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import from react toast
import { toast } from "react-toastify";
//importing from auth.js
import { signUp } from "../auth.js";
//importing loading button
import LoadingButton from "../Components/LoadingButton.jsx";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  // Navigate to Home Page
  const navigate = useNavigate();
  function HomePage() {
    navigate("/home");
  }

  // Create New Account and login
  const handleSignUp = async () => {
    setLoader(true);
    try {
      await signUp(email, password);
      setLoader(false);
      toast.success("Signed up successfully", { autoClose: 2000 });
      HomePage();
    } catch (err) {
      setLoader(false);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome To BookStore
          </h1>
          <p className="text-center text-gray-500 mb-8">Create account</p>
          {/* Form */}
          <form>
            <div className="space-y-4">
              {/* Name  */}
              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Last name   */}
              <input
                type="text"
                placeholder="Last Name (Optional)"
                className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Email   */}
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* password  */}
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Create account Button  */}
              <LoadingButton
                loading={loader}
                onClick={handleSignUp}
                children={"Create Account"}
                BtnText={"Creating account..."}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
