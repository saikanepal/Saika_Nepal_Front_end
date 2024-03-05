import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiMessageCircle } from 'react-icons/fi'; // Import WhatsApp icon

const WhatsAppChatButton = ({ phoneNumber }) => {
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth <= 640); // Adjust breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openWhatsAppChat = () => {
        window.open(`https://wa.me/${process.env.REACT_APP_NUMBER}`, '_blank');
    };

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return createPortal(
        <div className="fixed bottom-12 right-8">
            {isSmallDevice ? (
                expanded ? (
                    <button
                        onClick={openWhatsAppChat}
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                    >
                        Chat with us on WhatsApp
                    </button>
                ) : (
                    <button
                        onClick={toggleExpansion}
                        className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                    >
                        <FiMessageCircle size={28} />
                    </button>
                )
            ) : (
                <button
                    onClick={openWhatsAppChat}
                    className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Logo" className="w-6 h-6 mr-2 inline-block" /> Chat with us on WhatsApp
                </button>
            )}
        </div>,
        document.body
    );
};

export default WhatsAppChatButton;
