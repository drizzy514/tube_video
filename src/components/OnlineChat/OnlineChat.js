import "./OnlineChat.scss";
import io from "socket.io-client";
import { useState } from "react"
import Chat from "./Chat";
import { Link } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

function OnlineChat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="join-chat">
      {!showChat ? (
        <div className="card">
          <h3>Join A Chat</h3>
          <input
            className="username"
            type="text"
            placeholder="your name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            className="room-id"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className="join-btn"  onClick={joinRoom}>Join</button>
          <Link to="/" className="redirect-link"> Home Back </Link>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default OnlineChat;