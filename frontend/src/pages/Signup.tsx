import AuthForm from "../components/AuthForm";
import { ToastProvider } from "../components/ToastProvider";
import MovingBackground from "../UI/MovingBackground";

const Signup = () => {
  return (
    <div className="relative bg-[#191834]">
      <MovingBackground />
      <ToastProvider>
        <AuthForm mode="signup" />
      </ToastProvider>
    </div>
  );
};

export default Signup;
