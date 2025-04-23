import Inbox from "./Inbox";

export default function SignIn() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-tr from-black to-[#190019]">
        <div className="hidden lg:block">
          <Inbox />
        </div>
      </div>
    </div>
  );
}
