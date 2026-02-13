import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const OpeningRibbon = ({ onOpen }) => {

    const handleOpen = () => {
        // Trigger the callback which updates state in App.jsx
        // Using a small timeout to allow the 'click' animation to start
        setTimeout(onOpen, 300);
    };

    return (
        <motion.div
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.8 } }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white"
        >
            {/* Left Panel */}
            <motion.div
                initial={{ x: 0 }}
                exit={{ x: '-100%', transition: { duration: 0.8, ease: "easeInOut" } }}
                className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#fffafa] border-r border-romantic-red/20 z-10 flex items-center justify-end"
                style={{ width: '50%' }}
            >
                {/* Half Ribbon Line */}
                <div className="w-full h-8 bg-romantic-red absolute top-1/2 -translate-y-1/2 rounded-l-full" />
            </motion.div>

            {/* Right Panel */}
            <motion.div
                initial={{ x: 0 }}
                exit={{ x: '100%', transition: { duration: 0.8, ease: "easeInOut" } }}
                className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#fffafa] border-l border-romantic-red/20 z-10 flex items-center justify-start"
                style={{ width: '50%' }}
            >
                {/* Half Ribbon Line */}
                <div className="w-full h-8 bg-romantic-red absolute top-1/2 -translate-y-1/2 rounded-r-full" />
            </motion.div>

            {/* Center Bow / Button */}
            <motion.div
                exit={{ scale: 0, opacity: 0, rotate: 15, transition: { duration: 0.4 } }}
                className="relative z-30 flex flex-col items-center cursor-pointer group"
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Cute "Two-Heart" Ribbon Bow SVG */}
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-romantic-red drop-shadow-postcard">
                    {/* Left Heart Loop */}
                    <path d="M50 50 C 20 20, 10 50, 50 70" fill="#D2042D" stroke="white" strokeWidth="2" />
                    {/* Right Heart Loop */}
                    <path d="M50 50 C 80 20, 90 50, 50 70" fill="#D2042D" stroke="white" strokeWidth="2" />
                    {/* Knot */}
                    <circle cx="50" cy="55" r="8" fill="white" stroke="#D2042D" strokeWidth="3" />
                    {/* Ribbons hanging down */}
                    <path d="M45 60 L 30 90 L 45 85 L 50 60" fill="#D2042D" />
                    <path d="M55 60 L 70 90 L 55 85 L 50 60" fill="#D2042D" />
                </svg>

                <p className="mt-6 font-hand text-3xl text-romantic-red tracking-widest font-bold bg-white px-4 py-1 rounded-full border-2 border-romantic-red transform rotate-2">
                    Tap to Open
                </p>
            </motion.div>
        </motion.div>
    );
};

export default OpeningRibbon;
