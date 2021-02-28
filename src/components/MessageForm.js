import { PictureOutlined, SendOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatID, creds } = props;
    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatID, { text });

        setValue('');
    }
    const handleChange = (e) => {
        setValue(e.target.value);

        isTyping(props, chatID)
    }
    const handleUpload = (e) => {
        sendMessage(creds, chatID, { files: e.target.files, text: '' });
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>

            </label>
            <input
                type='file'
                multiple={false}
                id="upload-button"
                onChange={handleUpload.bind(this)}
                style={{
                    display: 'none'
                }}
            />
            <button type="submit">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm
