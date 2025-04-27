import AuthForm from "../components/AuthForm";
import { ToastProvider } from "../components/ToastProvider";

const Signin = () => {
  return (
    <div className="">
      <div className=""></div>

      <ToastProvider>
        <AuthForm mode="signin" />
      </ToastProvider>
    </div>
  );
};

export default Signin;
