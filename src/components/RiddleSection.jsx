import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const RiddleSection = () => {
    const [answer, setAnswer] = useState("");
    const [solved, setSolved] = useState(false);

    const handleInputChange = (e) => {
        const val = e.target.value;
        setAnswer(val);
        if (val.toLowerCase().trim() === "my heart") {
            setSolved(true);
        }
    };

    return (
        <section className="py-24 flex justify-center items-center bg-[#fdfbf7] relative">
            <div className="w-full max-w-2xl bg-white shadow-postcard p-8 md:p-12 rotate-[-1deg] border border-gray-100 relative paper-texture">
                {/* Paper Holes */}
                <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[#fdfbf7] shadow-inner border border-gray-200" />)}
                </div>

                <div className="ml-12">
                    <h3 className="font-hand text-4xl text-romantic-red mb-6 border-b-2 border-romantic-red/20 pb-2 inline-block">
                        A Little Riddle for You...
                    </h3>

                    <p className="font-note text-2xl leading-loose text-gray-800 mb-8">
                        "I can be stolen or given away,<br />
                        but I'm only yours if I choose to stay.<br />
                        What am I?"
                    </p>

                    <div className="relative">
                        <input
                            type="text"
                            value={answer}
                            onChange={handleInputChange}
                            placeholder="Type your answer here..."
                            className="w-full bg-transparent border-b-2 border-gray-300 font-hand text-3xl focus:outline-none focus:border-romantic-red py-2 text-center text-gray-600 placeholder-gray-300"
                            disabled={solved}
                        />

                        {solved && (
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="absolute right-0 top-0 bottom-0 flex items-center"
                            >
                                <span className="text-6xl">❤️</span>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-romantic-red font-display ml-4 text-xl font-bold uppercase tracking-widest"
                                >
                                    Correct!
                                </motion.span>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Doodle Decoration */}
                <svg className="absolute -bottom-10 -right-10 w-32 h-32 text-gray-400 opacity-50 transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path d="M10 50 Q 50 10 90 50 T 90 90" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="80" cy="80" r="5" fill="currentColor" />
                </svg>
            </div>
        </section>
    );
};

export default RiddleSection;
