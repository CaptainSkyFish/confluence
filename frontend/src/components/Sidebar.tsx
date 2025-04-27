// src/components/Sidebar.tsx
import React from "react";
import useGetAllRooms from "../hooks/useGetAllRooms";
import RoomList from "./RoomList";

const Sidebar: React.FC = () => {
  const { data, isLoading, error } = useGetAllRooms();

  if (isLoading) {
    return (
      <div>
        <h2 className="font-krylon text-xl font-extralight">Rooms</h2>
        <div className="">
          <div className="rounded-xl p-1 w-[90%] animate-gradient hover:bg-gradient-to-r from-[#4136c3] via-[#FBC7D4] to-[#9796F0] opacity-90 items-center">
            <div className="rounded-xl p-1 mr-auto bg-slate-200">
              <div className="bg-slate-300 rounded-xl m-1 w-fit text-transparent">
                roomName
              </div>
              <div className="bg-slate-300 m-1 rounded-xl w-4/5 text-transparent">
                description
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading rooms</div>;
  }

  return (
    <div>
      <RoomList rooms={data || []} />
    </div>
  );
};

export default Sidebar;
