import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Proposal = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [isMuted, setIsMuted] = useState(false); // Controls the video sound
    const noBtnRef = useRef(null);
    const videoRef = useRef(null); // Reference for the video element

    const handleNoHover = () => {
        if (noBtnRef.current) {
            const x = (Math.random() - 0.5) * 500;
            const y = (Math.random() - 0.5) * 500;
            noBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
            setNoCount(prev => prev + 1);
        }
    };

    const handleYesClick = () => {
        setYesPressed(true);

        // Music logic: Play video audio
        // We use a small timeout to ensure the video element has rendered before playing
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.muted = false; // Ensure sound is ON
                videoRef.current.play().catch(err => console.error("Video failed to play:", err));
            }
        }, 100);

        // Confetti logic
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            confetti({
                particleCount: 40,
                startVelocity: 30,
                spread: 360,
                origin: { x: Math.random(), y: Math.random() - 0.2 },
                colors: ['#D2042D', '#FFFFFF'],
            });
        }, 250);
    };

    const toggleMute = () => {
        if (videoRef.current) {
            const newMuteState = !isMuted;
            videoRef.current.muted = newMuteState;
            setIsMuted(newMuteState);
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-romantic-red/5">
            <AnimatePresence>
                {!yesPressed ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative z-10 space-y-12"
                    >
                        <h2 className="font-display text-5xl md:text-7xl text-romantic-red tracking-tight">
                            WILL YOU BE MY<br />
                            <span className="font-hand text-6xl md:text-8xl text-gray-800 lowercase">valentine?</span>
                        </h2>

                        <div className="flex gap-8 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleYesClick}
                                className="bg-romantic-red text-white font-display text-2xl py-4 px-12 rounded-full shadow-postcard hover:shadow-none transition-all"
                            >
                                YES!
                            </motion.button>

                            <motion.button
                                ref={noBtnRef}
                                onMouseEnter={handleNoHover}
                                className="bg-white text-gray-500 font-display text-lg py-3 px-8 rounded-full border border-gray-200"
                            >
                                {noCount === 0 ? "No" : "Catch me!"}
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-8 overflow-y-auto"
                    >
                        {/* Mute Button (Controls Video Sound) */}
                        <button
                            onClick={toggleMute}
                            className="fixed top-10 right-10 z-[60] bg-romantic-red/10 p-4 rounded-full text-romantic-red hover:bg-romantic-red/20 transition-all font-display"
                        >
                            {isMuted ? "🔇 Unmute Music" : "🔊 Mute Music"}
                        </button>

                        <h1 className="font-display text-6xl md:text-8xl text-romantic-red mb-8 animate-bounce">
                            YES TO THE FOREVER!
                        </h1>

                        <div className="w-full max-w-4xl aspect-video bg-black rounded-xl shadow-2xl overflow-hidden mb-8 border-4 border-romantic-red">
                            <video
                                ref={videoRef}
                                src="/images/vid4.mp4"
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mt-6 flex flex-col items-center gap-2">
                            <p className="font-hand text-3xl md:text-2.5xl text-gray-700 italic">
                                "Yours is the light by which my spirit's born."
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-romantic-red/30"></span>
                                <p className="font-hand text-2xl text-romantic-red italic">Rumi</p>
                                <span className="w-8 h-[1px] bg-romantic-red/30"></span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Proposal;