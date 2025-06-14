import React, { useEffect } from "react";
import useRoomStore from "../store/useRoomStore";
import { connectToRoom, disconnect } from "../config/socket";
import axios, { AxiosError } from "axios";
import CreateRoomButton from "./CreateRoomButton";
import useToast from "../hooks/useToast";

type Room = {
  id: string;
  roomName: string;
  description: string;
};

interface RoomListProps {
  rooms: Room[];
  isError: boolean;
  error: AxiosError | null;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, isError, error }) => {
  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);
  const { showToast } = useToast();
  useEffect(() => {
    console.log(error);
    if (isError && axios.isAxiosError(error)) {
      const errorMsg =
        (error.response?.data as { errMes?: string })?.errMes ||
        "Something went wrong.";
      showToast(errorMsg, "error");
    }
  }, [isError, error, showToast]);

  if (rooms.length === 0) {
    return (
      <div className="col-span-3 md:col-span-2 ml-3">
        <h2 className="font-krylon text-xl  font-extralight">Rooms</h2>
        <div className="text-white">
          <div className="flex flex-col items-center gap-8 justify-center w-full">
            <CreateRoomButton />
            <div className="flex items-center w-full text-sm text-gray-400">
              <hr className="flex-grow border-gray-600" />
              <span className="mx-3">OR</span>
              <hr className="flex-grow border-gray-600" />
            </div>{" "}
            <div className="relative w-full max-w-md">
              <input
                className="w-full pr-24 pl-3 py-3 rounded-sm border-1 border- font-bold text-[#e9e6e1] bg-transparent"
                type="text"
                placeholder="Room Code"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-br from-[#977DFF] to-[#F2E6EE] text-black font-semibold transition-all duration-350 rounded-sm hover:rounded-none hover:bg-[#977DFF]/70">
                Join
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-3 md:col-span-2 ml-3">
      <h2 className="font-krylon text-xl  font-extralight">Rooms</h2>
      <div className="border-l border-white/10 text-white/70">
        {rooms.map((room) => {
          const isSelected = selectedRoom?.id === room.id;

          return (
            <div
              key={room.id}
              onClick={() => {
                if (selectedRoom?.id !== room.id) {
                  disconnect();
                  setSelectedRoom(room);
                  connectToRoom(room.id);
                }
              }}
              className={`relative group pl-0 ml-0 p-1 w-[90%] m-1 cursor-pointer 
                ${
                  isSelected
                    ? "bg-purple-100/5 border-l-white/50 transition-all duration-200 text-white rounded-xl border-l-2 backdrop-blur-lg backdrop-brightness-75"
                    : "hover:rounded-none hover:border-l-2 hover:text-white"
                }`}
            >
              {" "}
              <div className="rounded-xl p-1 pl-3 mr-auto">
                <div className="rounded-xl m-1 ml-0 w-fit group-hover:underline ">
                  {room.roomName}
                </div>
                <div className="m-1  md:block hidden rounded-xl text-xs w-4/5 text-white/50">
                  {room.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;
