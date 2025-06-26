import { useEffect, useMemo, useRef } from "react";
import useFetchOldMessages from "../hooks/useFetchOldMessages";
import useMessageStore from "../store/useMessageStore";
import useRoomStore from "../store/useRoomStore";
import useUserStore from "../store/useUserStore";
import { DatabaseMessage } from "../types/messages";

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const MessageList = () => {
  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  const currentUser = useUserStore((state) => state.user);
  const {
    data: oldMessages,
    isLoading,
    error,
  } = useFetchOldMessages(selectedRoom?.id);
  const newMessages = useMessageStore((state) => state.messages);

  const combinedMessages = useMemo(() => {
    return [...(oldMessages ?? []), ...newMessages];
  }, [oldMessages, newMessages]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [combinedMessages]);

  if (isLoading)
    return <div className="text-center text-white">Loading messages...</div>;
  if (error) return <div className="text-red-500">Failed to load messages</div>;

  // Group messages by date
  const groupedByDate = combinedMessages.reduce<
    Record<string, DatabaseMessage[]>
  >((acc, message) => {
    const date = formatDate(message.timestamp);
    if (!acc[date]) acc[date] = [];
    acc[date].push(message);
    return acc;
  }, {});

  return (
    <div
      ref={scrollRef}
      className="p-4 space-y-4 overflow-y-auto max-h-[60vh] scroll-smooth"
    >
      {Object.entries(groupedByDate).map(([date, messages]) => (
        <div key={date} className="space-y-4">
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-white/20" />
            <span className="px-4 text-sm text-white/60">{date}</span>
            <div className="flex-grow border-t border-white/20" />
          </div>

          {messages.map((msg) => {
            console.log(msg);
            const isOwnMessage = msg.sender.id === currentUser?.id;
            return (
              <div
                key={msg.id}
                className={`max-w-[75%] p-3 rounded-lg shadow-sm ${
                  isOwnMessage
                    ? "ml-auto bg-blue-500/10 text-right"
                    : "mr-auto bg-white/5 text-left"
                }`}
              >
                <div className="text-sm text-white/80">
                  <strong>{msg.sender.username}</strong>{" "}
                  <span className="text-xs text-white/50">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="text-white mt-1">{msg.content}</div>
                {msg.replyToId && (
                  <div className="text-xs text-white/40 mt-1">
                    ↪ in reply to {msg.replyToId}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
