import { useState } from "react";
import ChannelBar from "./components/Channels";
import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";

function App() {
  const [channel, setChannel] = useState('')
  const [isVisible, setVisible] = useState(false)


  return (
    <>
      <div className="flex w-screen h-screen bg-primary">
        <Sidebar channel={channel} isVisible={isVisible} setVisible={setVisible} setChannel={setChannel} />
        <ChannelBar channel={channel} setChannel={setChannel} isVisible={isVisible} setVisible={setVisible} />
        <ChatBox channel={channel} setChannel={setChannel} />
      </div>
    </>
  );
}

export default App;
