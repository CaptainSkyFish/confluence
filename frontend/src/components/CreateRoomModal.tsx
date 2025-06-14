import { useState } from "react";
import useCreateRoom from "../hooks/useCreateRoom";
import axios from "axios";
import useToast from "../hooks/useToast";

const CreateRoomModal = ({ onClose }: { onClose: () => void }) => {
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");
  const createRoomMutation = useCreateRoom();
  const showToast = useToast();

  const handleSubmit = () => {
    if (!roomName.trim()) return;
    createRoomMutation.mutate(
      { roomName, description },
      {
        onSuccess: () => {
          onClose();
        },
        onError: (err) => {
          if (axios.isAxiosError(err)) {
            const errorMsg =
              (err.response?.data as { errMes?: string })?.errMes ||
              "Something went wrong.";
            showToast(errorMsg, "error");
          }

          console.error(err);
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl w-[90%] max-w-md shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-center">Create New Room</h2>
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-neutral-800"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-neutral-800"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
