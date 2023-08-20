import Chat from "./Chat";
import ChatService from "../service/chat";
import ChatList from "./ChatList";

export default function DashBoard({
  chatService,
}: {
  chatService: ChatService;
}) {
  return (
    <div className="flex h-screen border-obzen-purple border-solid">
      <ChatList />
      <Chat />
    </div>
  );
}
