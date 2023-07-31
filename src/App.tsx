import "./App.css";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Header />
      <div>
        <ChatList />
        <Chat chatName="Chat 1" />
      </div>
    </>
  );
}

export default App;
