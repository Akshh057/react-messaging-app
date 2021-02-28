import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import './App.css';
import LoginForm from './components/LoginForm.js';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="9fdbbf6c-d615-4a3c-a1cd-e28627cefc77"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
