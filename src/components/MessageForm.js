import { useEffect, useState } from 'react';
import { SendOutlined, PictureOutlined, PictureFilled, SmileFilled } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const [dis, setDis] = useState(false);
    const { chatID, creds, chats, userName } = props;

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatID);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
            sendMessage(creds, chatID, { text });

        }

        setValue('');
        setDis(false);
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatID, { files: event.target.files, text: '' });
    };

    const addEmoji = (e) => {
        let emoji = e.native;
        setValue(emoji);
    };
    const em = () => {
        if (dis === false)
            setDis(true);
        else
            setDis(false);

        console.log(dis);

    }
    return (
        <>
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
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: 'none' }}
                    onChange={handleUpload.bind(this)}
                />

                <label htmlFor="emoji-button" onClick={em}>
                    <span className="image-button">
                        <SmileFilled className="picture-icon" />
                    </span>
                </label>
                <input
                    type="text"
                    multiple={false}
                    id="emoji-button"
                    style={{ display: 'none' }}
                    value={value}
                    onChange={handleUpload.bind(this)}
                />

                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
                </button>
            </form>
            <span style={{ display: dis ? 'block' : 'none' }} id="message">
                <Picker onSelect={addEmoji} style={{ width: '100%' }} />
            </span>

        </>
    );
};

export default MessageForm;