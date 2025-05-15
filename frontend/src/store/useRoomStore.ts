import { create } from "zustand";

interface Room {
  id: string;
  roomName: string;
  description: string;
}

interface RoomStore {
  selectedRoom: Room | null;
  setSelectedRoom: (room: Room) => void;
}

const useRoomStore = create<RoomStore>((set) => ({
  selectedRoom: null,
  setSelectedRoom: (room) => set({ selectedRoom: room }),
}));

export default useRoomStore;
