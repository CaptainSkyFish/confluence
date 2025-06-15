import { useState } from "react";
import useToast from "../hooks/useToast";
import useCreateRoom from "../mutations/useCreateRoom";

const CreateRoomModal = ({ onClose }: { onClose: () => void }) => {
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");
  const { showToast } = useToast();
  const createRoomMutation = useCreateRoom();

  const handleSubmit = () => {
    if (!roomName.trim()) {
      showToast("Room Name is required!", "error");
      return;
    }
    createRoomMutation.mutate(
      { roomName, description },
      { onSuccess: () => onClose() },
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center border-1 border-black shadow-xl justify-center z-50 backdrop-blur-sm"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative text-base tracking-tightest font-nebula-book bg-[#0f0f0f]/30 border-[#ffffff20] border-b-1 backdrop-blur-lg backdrop-saturate-180 backdrop-contrast-125 bg-blend-overlay p-6 rounded-xl w-[90%] max-w-md shadow-lg space-y-4"
      >
        <div
          onClick={onClose}
          className="absolute top-5 left-3 h-4 w-4 rounded-full bg-[#d53230]/80 hover:bg-red-600 cursor-pointer"
          title="Close"
        />
        <h2 className="text-xl pt-8 font-nebula-light font-bold text-center">
          Create New Room
        </h2>
        <div className="flex flex-col-reverse">
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            disabled={createRoomMutation.isPending}
            onChange={(e) => setRoomName(e.target.value)}
            className="peer w-full font-nebula-light border-b border-b-[#0f0f0f] relative placeholder:absolute outline-none p-2 placeholder:duration-500 focus:placeholder:pt-10"
          ></input>
          <span className="pl-2  duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
            Room Name
          </span>
        </div>

        <div className="flex flex-col-reverse">
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => {
              const descMaxWordLength = 80;
              if (e.target.value.split("").length <= descMaxWordLength)
                setDescription(e.target.value);
              else
                showToast(
                  `Bio cannot exceed ${descMaxWordLength} letters max limit`,
                  "error",
                );
            }}
            disabled={createRoomMutation.isPending}
            className="peer relative font-nebula-light focus:placeholder:pt-15 placeholder:absolute placeholder:duration-500 w-full h-fit resize-none overflow-hidden border-b focus:outline-none border-b-[#0f0f0f] p-2"
          ></textarea>{" "}
          <span className="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
            Description
          </span>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            disabled={createRoomMutation.isPending}
            className={`px-4 py-2 rounded h-full w-full flex-grow ${createRoomMutation.isPending ? "bg-[#c8b3f6] cursor-not-allowed" : "bg-[#2d1c7f] transition-all duration-400 cursor-pointer"}`}
          >
            {createRoomMutation.isPending ? "Creating..." : "Create Room"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoomModal;
