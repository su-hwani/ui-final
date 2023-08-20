import "./App.css";
import Header from "./components/Header";
import ChatList from "./components/DashBoard";
import ChatService from "./service/chat";

function App({ chatService }: { chatService: ChatService }) {
  return (
    <>
      <Header />
      <ChatList chatService={chatService} />
    </>
  );
}

export default App;
