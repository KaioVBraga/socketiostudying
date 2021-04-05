import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Home = () => {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  const [message, setMessage] = useState("");

  // establish socket connection
  useEffect(() => {
    setSocket(io("http://localhost:3333"));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("messageTest", (response) => {
      console.log("response", response);

      setMessage(response.msg);

      socket.emit("responseTeste", { response: "dylan" });
    });
  }, [socket]);

  return (
    <div>
      <h2>{socketConnected ? "Connected" : "Disconected"}</h2>

      {message}
    </div>
  );
};

export default Home;
