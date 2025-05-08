import { BACKEND_URL } from "./backendUrl";

let socket: WebSocket | null = null;
const connectToRoom = (roomId: string) => {
  socket = new WebSocket(
    `wss://${BACKEND_URL.split(":")[1]}/ws?roomId=${roomId}`,
  );
  socket.onopen = () => {
    console.log(`connected to room ${roomId}`);
  };
  socket.onmessage = (event) => {
    console.log(`received: ${event.data}`);
  };
  socket.onclose = () => {
    console.log(`Disconnected`);
  };
  socket.onerror = (err) => {
    console.log(err);
  };
};

const sendMessage = (message: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.warn("WebSocket is not open. Cannot send message");
  }
};

const disconnect = () => {
  socket?.close();
};

export { connectToRoom, sendMessage, disconnect };
