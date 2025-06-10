import { useState } from "react";
import CreateRoomIcon from "../utils/CreateRoomIcon";
import CreateRoomModal from "./CreateRoomModal";

const CreateRoomButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex rounded-md p-2 items-center justify-center max-w-fit hover:bg-slate-600/30  hover:bg-backdrop-blur-xl"
      >
        <CreateRoomIcon /> Create{" "}
      </button>
      {showModal && <CreateRoomModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CreateRoomButton;
