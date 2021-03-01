import React, { useState } from 'react';
import moment from 'moment';
const MyMessage = ({ message }) => {

    let time = false;
    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }
    // if(moment(message.created).format(MMMM Do YYYY))
    console.log(moment(message.created).format('MMMM DO YYYY') === moment().format('MMMM DO YYYY'));
    if (moment(message.created).format('MMMM DO YYYY') === moment().format('MMMM DO YYYY'))
        time = true;
    else
        time = false;
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
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
    );
};

export default MyMessage;