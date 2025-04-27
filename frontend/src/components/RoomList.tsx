import React from "react";

type Room = {
  id: string;
  roomName: string;
  description: string;
};

interface RoomListProps {
  rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  return (
    <div>
      <h2 className="font-krylon text-xl font-extralight">Rooms</h2>
      <div className="">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative rounded-xl p-1 w-[90%] transition-all duration-300 ease-in-out
          hover:bg-slate-200/50 hover:backdrop-blur-lg hover:backdrop-brightness-50
          hover:backdrop-filter hover:outline-none outline outline-gray-300"
          >
            <div className="rounded-xl p-1 mr-auto">
              <div className="rounded-xl m-1 w-fit text-white">
                {room.roomName}
              </div>
              <div className="m-1 rounded-xl w-4/5 text-white">
                {room.description}
              </div>
            </div>
            {/* Glassy and blurry background with noise on hover */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/path-to-your-noise-texture.png')] opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
