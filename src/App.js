import { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

function App() {
    const [messages, setMessages] = useState([]);
    const handleSend = (newMessage) => {
        if (newMessage) setMessages([...messages, newMessage]);
    };
    const handleDelete = () => {
        setMessages([]);
    };

    const handleDeleteItem = (item) => {
        setMessages(messages.filter((message) => message !== item));
    };
    return (
        <>
            <NewMessageForm onSend={handleSend} />
            <MessageList
                data={messages}
                onDelete={handleDelete}
                onDeleteItem={handleDeleteItem}
            />
        </>
    );
}

export default App;
