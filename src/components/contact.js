import React, { useState, useEffect } from 'react';
import img from '../assets/bitmoji.svg';
import cross from '../assets/cross.svg';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [displayHi, setDisplayHi] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const options = ['Just saying Hi', 'Download Resume', 'Contact Me'];

    useEffect(() => {
        if (isOpen && !displayHi) {
            // Simulate a system message arriving with a delay
            setTimeout(() => {
                setChatMessages([
                    ...chatMessages,
                    {
                        text: "Hey👋🏽, What's up?",
                        isSystem: true,
                    }, {
                        text: "I'm Lakshay, and I am a full stack developer just trying to explore new skills and brushing up skills that i know",
                        isSystem: true,
                    }
                ]);
                setDisplayHi(true);
            }, 1000);
        }
    }, [isOpen, chatMessages, displayHi]);

    const handleOptionClick = (option) => {
        if (option === 'Just saying Hi') {
            // Display a message from the user's end
            setChatMessages([
                ...chatMessages,
                { text: 'Hi!', isUser: true },
                { text: 'Hello!', isSystem: true },
                { text: 'I hope you enjoyed exploring my portfolio.', isSystem: true },
                { text: 'Can i help you with anything else?', isSystem: true }

            ]);
        } else if (option === 'Contact Me') {
            // Display "Let's connect" message and provide your email
            setChatMessages([
                ...chatMessages,
                { text: "Let's connect", isUser: true },
                { text: 'Sure', isSystem: true },
                { text: 'Here is my email  lakshayarora0612@gmail.com', isSystem: true },
            ]);
        }
        else if (option === 'Download Resume') {
            // const link = document.createElement('a');
            // link.href = resumePDF;
            // link.download = 'Mitesh_Singla_Resume.pdf';
            // link.click();
        }
        else if (option === 'Close') {
            // Close the chat interface
            setIsOpen(false);
        } else {
            // For other options, just display the selected option as a user message
            setChatMessages([...chatMessages, { text: option, isUser: true }]);
        }

        setSelectedOption(option);
    };

    return (
        <div className="chat-interface">
            {isOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <div className="user-info">
                            <img
                                src={img}
                                alt="Your Name"
                                className="user-photo"
                            />
                            <text>Lakshay Arora</text>
                        </div>
                        <span className="close-button" onClick={() => handleOptionClick('Close')}>
                            <img
                                src={cross}
                                alt="Back"
                                className="back"
                            />
                        </span>
                    </div>
                    <div className="chat-messages">
                        {chatMessages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.isSystem ? 'system' : ''} ${message.isUser ? 'user' : ''
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-suggestions">
                        <ul>
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`option ${option === selectedOption ? 'selected' : ''}`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;