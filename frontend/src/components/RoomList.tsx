import React from "react";
import useRoomStore from "../store/useRoomStore";
import { connectToRoom, disconnect } from "../config/socket";

type Room = {
  id: string;
  roomName: string;
  description: string;
};

interface RoomListProps {
  rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);

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
