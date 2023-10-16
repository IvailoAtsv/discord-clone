import ChannelBar from "./Channels";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex w-screen h-screen bg-primary">
      <Sidebar />
      <ChannelBar />
      <ChatBox />
    </div>
  );
}

export default App;
