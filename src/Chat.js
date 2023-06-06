import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3001'); // El servidor de chat en tiempo real

function Chat() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar el mensaje al servidor a través de WebSockets
    socket.emit('new-message', inputValue);
    setInputValue('');
  };

  useEffect(() => {
    // Manejar mensajes recibidos del servidor
    socket.on('new-message', (message) => {
      setMessages([...messages, message]);
    });

    // Limpiar la conexión del socket cuando el componente se desmonta
    return () => {
      socket.disconnect();
    };
  }, [messages]);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
  
}

export default Chat;
