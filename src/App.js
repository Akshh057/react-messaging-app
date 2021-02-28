import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import './App.css';
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="9fdbbf6c-d615-4a3c-a1cd-e28627cefc77"
            userName="Akshat"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
