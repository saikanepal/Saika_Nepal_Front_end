import React from 'react';
import saikaLogo from "../../assets/logo192.png";

const Loader = () => {
    const letters = [
        { char: 'S', delay: '0s' },
        { char: 'A', delay: '0.2s' },
        { char: 'I', delay: '0.4s' },
        { char: 'K', delay: '0.6s' },
        { char: 'A', delay: '0.8s' },
        { char: ' ', delay: '1s', isSpacer: true }, // Spacer element
        { char: 'N', delay: '1.2s' },
        { char: 'E', delay: '1.4s' },
        { char: 'P', delay: '1.6s' },
        { char: 'A', delay: '1.8s' },
        { char: 'L', delay: '2s' }
    ];

    return (
        <div className='bg-blue-50'>
            <img src={saikaLogo} className="h-20 left-2 top-2 fixed" alt="saika logo" />
            <div className='flex h-screen items-center justify-center text-4xl md:text-6xl tracking-wide font-Saira font-semibold text-blue-800'>
                {letters.map((letter, index) => (
                    <h1
                        key={index}
                        className={`letter ${letter.isSpacer ? 'mx-2' : ''}`}
                        style={{ animationDelay: letter.delay }}
                    >
                        {letter.char}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default Loader;
