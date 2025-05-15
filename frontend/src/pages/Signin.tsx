import AuthForm from "../components/AuthForm";
import { ToastProvider } from "../components/ToastProvider";
import MovingBackground from "../UI/MovingBackground";

const Signin = () => {
  return (
    <div className="relative bg-[#191834]">
      <MovingBackground />
      <ToastProvider>
        <AuthForm mode="signin" />
      </ToastProvider>
    </div>
  );
};

export default Signin;
