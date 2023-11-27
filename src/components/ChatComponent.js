import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setNewMessage('');
    };

    return (
        <div className="mx-auto my-8 p-4 border rounded-md shadow-md max-w-md">
            <div className="mb-4 h-40 overflow-y-auto border-b">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className="bg-blue-500 text-white p-2 rounded-md inline-block">
                            {message.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-2 border rounded-md mr-2"
                    placeholder="Type your message..."
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;