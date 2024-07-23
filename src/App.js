import { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage]);
  }
  return (
    <>
    <NewMessageForm onSend={handleSend} />
    <MessageList data = {messages}/>
    </>
  )
}

export default App;
