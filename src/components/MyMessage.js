import React from 'react';
import moment from 'moment';
const MyMessage = ({ message }) => {

    let time = false;
    if (message.attachments && message.attachments.length > 0) {
        return (
            <>
                <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ float: 'right' }}
                />
                <span style={{ fontSize: "10px", float: 'right', marginRight: '10px' }}>{
                    time ?
                        (
                            moment(message.created).calendar()
                        ) : (
                            moment(message.created).format('MMMM Do YYYY, h:mm a')
                        )

                }
                </span>
            </>
        );
    }

    if (moment(message.created).format('MMMM DO YYYY') === moment().format('MMMM DO YYYY'))
        time = true;
    else
        time = false;
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            <span style={{ fontSize: "18px" }}> {message.text} </span>
            <span style={{ fontSize: "10px", display: 'block', marginTop: '2px' }}>{
                time ?
                    (
                        moment(message.created).calendar()
                    ) : (
                        moment(message.created).format('MMMM Do YYYY, h:mm a')
                    )

            }
            </span>
        </div>
    );
};

export default MyMessage;