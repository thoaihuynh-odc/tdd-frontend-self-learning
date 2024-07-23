function MessageList({ data }) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default MessageList;
