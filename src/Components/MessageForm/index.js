import React from 'react';
import './MessageForm.css';
const MessageForm = () => {
    return (
        <div class="messageForm__container">
            <form class="messageForm" action="" method="">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type a message here..."
                ></textarea>
                <button class="messageForm__sendBtn" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30.2 30.1"
                    >
                        <path
                            class="st0"
                            d="M2.1 14.6C8.9 12 28.5 4 28.5 4l-3.9 22.6c-0.2 1.1-1.5 1.5-2.3 0.8l-6.1-5.1 -4.3 4 0.7-6.7 13-12.3 -16 10 1 5.7 -3.3-5.3 -5-1.6C1.5 15.8 1.4 14.8 2.1 14.6z"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default MessageForm;
