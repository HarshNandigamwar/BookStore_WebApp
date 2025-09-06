//import from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import from auth.js
import { signIn, googleLogin } from "../auth.js";
// importing loading button
import LoadingButton from "../Components/LoadingButton.jsx";
//import from react toast
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // Login
  const handleSignIn = async () => {
    setLoader(true);
    try {
      await signIn(email, password);
      setLoader(false);
      toast.success("LogIn successfully", { autoClose: 2000 });
      navigate("/home");
    } catch (err) {
      setLoader(false);
      toast.error(err.message);
    }
  };

  // Handle Google SignIn
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google ✅", { autoClose: 2000 });
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      console.error("Google login error:", err);
    }
  };

  // Navigate to SignUp
  function SignUp() {
    navigate("/signuppage");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome To BookStore
        </h1>
        <p className="text-center text-gray-500 mb-8">Login to your account</p>

        {/* Form */}
        <form action="">
          <div className="space-y-4">
            {/* Email   */}
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Password  */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Login Button   */}
            <LoadingButton
              loading={loader}
              onClick={handleSignIn}
              children={"LogIn"}
              BtnText={"LogIn..."}
            />
          </div>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center text-black justify-center gap-2 border-2 border-orange-300 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          {/* Google img   */}
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
        <div className="mt-5">
          {/* SignUp */}
          <p className="text-center text-gray-500 text-sm mt-2">
            Don't have an account?
            <span className="text-blue-500 cursor-pointer" onClick={SignUp}>
              {" "}
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
