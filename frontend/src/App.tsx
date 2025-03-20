import { useEffect, useRef, useState, } from 'react'
import './App.css'

function App() {
  const [ messages, setMessages ] = useState<string[]>([])
  const wsRef = useRef<WebSocket>(null)
  const [ input, setInput ] = useState<string>("") 

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:2025")      //replace the hardcoded url 
    wsRef.current = ws

    ws.onmessage = (event) => {
      console.log("Received: ", event.data)       //remove comment
      setMessages(prev => [...prev, event.data])
    }

   ws.onopen = () => console.log("WebSocket connected");
   ws.onclose = () => console.log("WebSocket disconnected");
   ws.onerror = (error) => console.error("WebSocket error:", error);

    return () => {
      ws.close(); // Cleanup on unmount
    }
  }, [])


  const sendMessage = () => {
    if( wsRef.current ) 
      wsRef.current.send(input) 
    setInput("")
   }

  return <div className="h-screen bg-black w-full p-4 flex justify-center items-center">
  {/* Message Box */}
  <div className="border border-[#727272] h-[85vh] w-[50%] rounded-lg flex flex-col overflow-auto p-4">
      {/* Messages */}
    <div className='text-lg text-white font-extrabold border-b border-b-[#727272]'>Messages</div>
    <div className="flex-grow overflow-auto">
      {messages.map((mes, index) => (
        <div key={index} className="rounded-lg m-5 bg-white max-w-fit outline-gray-600 p-2">
          {mes}
        </div>
      ))}
    </div>

    {/* Input and Button */}
    <div className="flex w-full items-center p-2 rounded-b-lg">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send message on Enter
        className="border border-[#727272] p-2 w-full rounded-full text-white placeholder-slate-300"
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        className="bg-amber-800 font-bold text-white p-3 ml-2 rounded-xl hover:bg-amber-700"
      >
        Send
      </button>
    </div>
  </div>
</div>}

export default App
