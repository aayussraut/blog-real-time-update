import { useEffect, useState } from "react";
import { connectToSocket, joinChat, postChat } from "../utils/chat";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const io = connectToSocket();
    io.socket.on("connect", () => {
      console.log("Connected");
    });
    io.socket.on("message", (msg) => {
      console.log(msg);
      setChats((prevValue) => prevValue.concat([msg]));
    });
  }, []);

  const handleJoin = () => {
    joinChat(145)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postChat(145, message)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setMessage("");
  };

  return (
    <div className="flex min-h-screen max-h-fit justify-center items-center ">
      <div className="bg-slate-800 p-16 rounded-xl shadow-2xl  ">
        <h1 className="text-4xl font-bold mb-4">Chat</h1>
        <button
          onClick={handleJoin}
          className="mb-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400"
        >
          Join
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-5">
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col gap-2">
          {chats.map((chat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-gray-400">{chat.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
