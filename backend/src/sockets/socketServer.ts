import { RawData, WebSocket, WebSocketServer } from "ws";
import type { IncomingMessage, Server } from "http";

type RoomId = string;

const rooms = new Map<RoomId, Set<WebSocket>>();

export const setupWebSocketServer = (server: Server) => {
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    const protocol = request.headers['x-forwarded-proto'] || 'http'
    const requestUrl = new URL(request.url!, `${protocol}://${ request.headers.host }`)
    const pathname = requestUrl.pathname
    const roomId = requestUrl.searchParams.get('roomId')

    if (pathname === "/ws" && roomId) {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request, roomId);
      });
    } else {
      socket.destroy();
    }
  });


  wss.on(
    "connection",
    (ws: WebSocket, req: IncomingMessage, roomId: RoomId) => {
      if (!(typeof roomId === "string")) {
        ws.close();
        return;
      }
      console.log(`Client connected to room ${roomId}`);

      if (!rooms.has(roomId)) rooms.set(roomId, new Set());
      rooms.get(roomId)!.add(ws);

      ws.on("message", (msg: RawData) => {
        console.log(`Message in room ${roomId}:`, msg.toString());

        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === ws.OPEN)
            client.send(msg.toString());
        });
      });

      ws.on("close", () => {
        rooms.get(roomId)?.delete(ws);
        console.log(`Client disconnected from room ${roomId}`);
      });
    },
  );
};
