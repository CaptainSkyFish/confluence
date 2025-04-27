import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useToast } from "./ToastProvider";

type AuthMode = "signin" | "signup";

interface AuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `${BACKEND_URL}/api/v1/users/${mode}`;
      const payload =
        mode === "signup"
          ? { username, password, bio }
          : { username, password };

      const res = await axios.post(url, payload, { withCredentials: true });
      {
        console.log(res.data);
      }
      showToast(
        mode === "signup" ? "Signed up successfully!" : "Logged in!",
        "success",
      );
    } catch (err: any) {
      showToast(err.response?.data?.errMes || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10 p-4 border rounded-xl shadow">
      {/* 🔵 Loading bar */}
      {loading && (
        <div className="absolute top-0 left-0 h-1 w-full bg-blue-500 animate-loading" />
      )}

      <h2 className="text-2xl font-semibold mb-4 capitalize">{mode}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          disabled={loading}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {mode === "signup" && (
          <textarea
            placeholder="Bio (optional)"
            value={bio}
            disabled={loading}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Please wait..."
            : mode === "signup"
              ? "Sign Up"
              : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
