import React from 'react'
import moment from 'moment';

const TheirMessage = ({ lastMessage, message }) => {
    let time = false;
    if (moment(message.created).format('MMMM DO YYYY') === moment().format('MMMM DO YYYY'))
        time = true;
    else
        time = false;
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div
                        className="message-avatar"
                        style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                    />
                )}

            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].title}
                        alt="message-attachement"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{ float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '48px', backgroundColor: '#CABCDC' }}>
                        <span style={{ fontSize: "22px" }}> {message.text} </span>
                        <span style={{ fontSize: "10px" }}>{
                            time ?
                                (
                                    moment(message.created).calendar()
                                ) : (
                                    moment(message.created).format('MMMM Do YYYY, h:mm a')
                                )

                        }
                        </span>
                    </div>
                )

            }
        </div>
    )
}

export default TheirMessage
