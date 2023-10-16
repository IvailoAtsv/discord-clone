import { useState } from "react";
import ChannelBar from "./Channels";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

function App() {
  const [channel, setChannel] = useState('')

  return (
    <div className="flex w-screen h-screen bg-primary">
      <Sidebar channel={channel} setChannel={setChannel} />
      <ChannelBar channel={channel} setChannel={setChannel} />
      <ChatBox channel={channel} setChannel={setChannel} />
    </div>
  );
}

export default App;
