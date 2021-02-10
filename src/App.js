import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

function App() {
  if(!localStorage.getItem('username'))
    return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        projectID='29e60da7-942d-47ff-8e0d-ce3a61a5004f'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        height='100vh'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
