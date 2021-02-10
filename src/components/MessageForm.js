import React, { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MessageForm(props) {
    console.log("props",props)

    const{chatId, creds} = props;

    const [value , setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(creds, chatId)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();

        if(text.length > 0){
            sendMessage(creds, chatId, {text});
        }

        setValue('')
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files })
    }

    return (
        <div>
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
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
                </button>
            </form>
        </div>
    )
}

export default MessageForm
