import React from "react";
import { MdChat } from "react-icons/md";
import JoinRooms from "./JoinRooms";
import JoinGlobal from "./JoinGlobal";

function Home() {
  return (
    <div className="container text-center marginTop">
      <MdChat size={55} />
      <span className="display-4">Chattin'</span>
      <hr className="col-6" />
      <JoinRooms />
      <JoinGlobal />
    </div>
  );
}

export default Home;
