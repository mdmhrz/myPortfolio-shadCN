import React from 'react';
import clsx from 'clsx';

const CustomButton = ({ text, conditional }) => {
    const baseClass = `
        bg-gradient-to-r
        from-purple-700
        to-slate-900
        text-white
        font-semibold
        py-2 px-6
        rounded-lg
        shadow-md
        transition-colors
        duration-300
        ease-in-out
        hover:scale-101
        active:scale-95
        cursor-pointer
    `;

    return (
        <button className={clsx(baseClass, conditional)}>
            {text}
        </button >
    );
};

export default CustomButton;
