// App.tsx

import React from 'react';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatList />
      <Chat chatName="Chat 1" />
    </div>
  );
}

export default App;
