import userRoutes from "./routes/userRoutes";
import roomRoutes from "./routes/roomRoutes";
import messageRoutes from "./routes/messageRoutes";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { setupWebSocketServer } from "./sockets/socketServer";
import http from "http";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://confluence-theta.vercel.app/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);
setupWebSocketServer(server);

app.use("/api/v1/rooms", roomRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/messages", messageRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
