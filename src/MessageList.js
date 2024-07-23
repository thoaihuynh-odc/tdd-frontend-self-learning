import React, { useEffect } from "react";

function MessageList({ data, onDelete, onDeleteItem }) {
    useEffect(() => {
        console.log(data);
    }, [data]);
    function deleteMessage() {
        onDelete();
    }

    function deleteItem(message) {
        onDeleteItem(message);
    }
    return (
        <>
            <button onClick={deleteMessage} data-testid="deleteAllButton">
                Delete all
            </button>
            <ul data-testid="messageList">
                {data &&
                    data.map((item, index) => (
                        <li key={item} data-testid={`messageItem-${index}`}>
                            {item}
                            <span
                                style={{ marginLeft: "20px" }}
                                onClick={() => deleteItem(item)}
                                data-testid={`deleteButton-${index}`}>
                                &#8999;
                            </span>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default MessageList;
