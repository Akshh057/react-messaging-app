import React, { useState } from 'react'
import axios from 'axios';
import { MessageOutlined } from '@ant-design/icons';

const projectID = '9fdbbf6c-d615-4a3c-a1cd-e28627cefc77';
const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': userName, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">React Chat App</h1>
                <MessageOutlined style={{ fontSize: "50px", color: "white" }} />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required className="input" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required className="input" />
                    <div align="center">
                        <button type="submit" className="button" className="input1">
                            Login
                        </button>
                    </div>
                </form>
                <h1 className="error">{error}</h1>
            </div>
        </div>

    );
}

export default LoginForm
