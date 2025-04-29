import React from "react";
import useRoomStore from "../store/useRoomStore";

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
    <div className="col-span-2">
      <h2 className="font-krylon text-xl font-extralight">Rooms</h2>
      <div className="">
        {rooms.map((room) => {
          const isSelected = selectedRoom?.id === room.id;

          return (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`relative rounded-xl p-1 w-[90%] transition-all duration-300 ease-in-out m-1 cursor-pointer 
                ${
                  isSelected
                    ? "bg-[#FBC7D4]/30 backdrop-blur-lg backdrop-brightness-75"
                    : "hover:bg-[#FBC7D4]/15 hover:backdrop-blur-lg hover:backdrop-brightness-50 hover:backdrop-filter"
                }`}
            >
              {" "}
              <div className="rounded-xl p-1 mr-auto">
                <div className="rounded-xl m-1 w-fit text-white">
                  {room.roomName}
                </div>
                <div className="m-1 rounded-xl text-xs w-4/5 text-white/50">
                  {room.description}
                </div>
              </div>
              <div className="absolute rounded-xl inset-0 bg-cover bg-no-repeat bg-center bg-[url('/textures/cardboard-texture.jpg')] opacity-0 transition-opacity ease-in-out duration-300 hover:opacity-30"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;
