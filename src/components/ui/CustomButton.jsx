import React from 'react';

const CustomButton = ({ text }) => {
    return (
        <button
            className='
                    bg-gradient-to-r
                    from-purple-700
                    to-slate-900
                    text-white 
                    font-semibold 
                    py-2 px-6 rounded-lg 
                    shadow-md
                    hover:from-slate-900
                    hover:to-purple-700
                    ease-in-out
                    active:scale-95
                    cursor-pointer
                    '

        >
            {text}

        </button>
    );
};

export default CustomButton;