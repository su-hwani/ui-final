import "./App.css";
import Header from "./components/Header";
import ChatService from "./service/chat";
import DashBoard from "./components/DashBoard";
import { useEffect, useState } from "react";

function App({ chatService }: { chatService: ChatService }) {
  const [userSessionID, setUserSessionID] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionID = async () => {


      console.log(document.cookie)
      console.log("AAA")
      const sessionID = await chatService.createSessionID();
      setUserSessionID(sessionID["data"]["session_ID"]);


    };

    fetchSessionID();
  }, []);

  return (
    <>
      <Header />
      <DashBoard chatService={chatService} />
    </>
  );
}

export default App;
