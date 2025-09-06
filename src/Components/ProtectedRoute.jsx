//import from react
import { Navigate } from "react-router-dom";
//import AuthContext
import { useAuth } from ".././auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <p className="flex justify-center text-center mt-10">
        <span className="animate-spin">⌛</span> Loading books...
      </p>
    );
  // if no user → go to login
  if (!user) return <Navigate to="/loginpage" replace />;
  return children;
}
