import React, { useEffect, useState } from 'react'
import MyMessage from './MyMessage';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import './chatfeed.css'
import { animateScroll } from "react-scroll";

const ChatFeed = (props) => {
    useEffect(() => {
        scrollToBottom();

    })
    const scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: "message"
        });
    }
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />

                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        console.log("hello");
    }, [renderMessages])
    if (!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {
                        chat?.title
                    }
                    <button onClick={
                        () => {
                            localStorage.removeItem('username')
                            localStorage.removeItem('password')
                            window.location.reload();
                        }
                    } className="btn_logout">
                        Logout
                    </button>
                </div>
                <div className="chat-subtitle">
                    {
                        `Users in the room:  ${chat?.people.map((person) => ` ${person.person.username} `)}`
                    }
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container" id="message">
                <MessageForm {...props} chatID={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed
