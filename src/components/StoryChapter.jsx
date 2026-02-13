import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryChapter = ({ chapterIndex, title, narrative, poem, imageSrc, imageLeft = false, extraContent }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Editorial motion
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            ref={ref}
            className="min-h-[90vh] py-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden"
        >
            <div className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center max-w-7xl mx-auto w-full relative z-10 ${imageLeft ? '' : 'md:grid-flow-row-dense'}`}>

                {/* Image Column - Postcard Style */}
                <div className={`relative ${imageLeft ? 'md:order-1' : 'md:order-2'} group perspective-1000`}>
                    <motion.div
                        className="relative"
                        style={{ y, rotate }}
                    >
                        {/* Postcard Background/Shadow */}
                        <div className="absolute inset-0 bg-romantic-red rounded-[2px] transform translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 shadow-sm opacity-20"></div>

                        {/* Main Image Container */}
                        <div className="bg-white p-3 md:p-4 shadow-xl border border-gray-100 rotate-1 rounded-[2px]">
                            <motion.div
                                className="overflow-hidden relative min-h-[450px] w-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Wobbly Border Mask via CSS clip-path or simple radius for now as requested "wobbly border-radius" */}
                                <motion.img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                    style={{
                                        // Not strictly clip-path, but a rough wobbly radius for visual interest
                                        borderRadius: '2px' // Keeping it sharp for "Postcard" look per new request "postcard look" usually implies sharp corners or slight rounding. 
                                        // User asked for "highlighted look... shortcut... subtle red drop shadow... slight irregular hand-drawn border"
                                    }}
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </motion.div>

                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/90 shadow-sm transform -rotate-2 opacity-80 backdrop-blur-sm border-l border-r border-gray-200/50"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Text Column - Editorial Typography */}
                <div className={`flex flex-col gap-6 ${imageLeft ? 'md:text-right items-end md:order-2' : 'md:text-left items-start md:order-1'}`}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20%" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <div className="overflow-hidden">
                            <motion.h3 variants={textVariants} className="font-display text-8xl md:text-9xl text-romantic-red/10 absolute -z-10 select-none">
                                0{chapterIndex}
                            </motion.h3>

                            <motion.div variants={textVariants} className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-1 bg-romantic-red"></span>
                                <span className="font-display text-romantic-red text-xl tracking-[0.3em] font-bold">CHAPTER 0{chapterIndex}</span>
                                <span className="w-12 h-1 bg-romantic-red"></span>
                            </motion.div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h2 variants={textVariants} className="font-display text-5xl md:text-7xl text-gray-900 leading-[0.9] mb-8">
                                {title}
                            </motion.h2>
                        </div>

                        {narrative && (
                            <motion.p variants={textVariants} className="font-hand text-3xl md:text-4xl text-gray-700 leading-normal max-w-lg">
                                {narrative}
                            </motion.p>
                        )}

                        {poem && (
                            <motion.div variants={textVariants} className="mt-8 relative p-8 bg-[#fffdf5] shadow-postcard transform rotate-1 border border-gray-100 max-w-md">
                                <div className="absolute -top-3 -left-3 text-4xl text-romantic-red opacity-50">❝</div>
                                <p className="font-note text-2xl leading-relaxed text-gray-800 whitespace-pre-line">
                                    {poem}
                                </p>
                                <div className="absolute -bottom-3 -right-3 text-4xl text-romantic-red opacity-50">❞</div>
                            </motion.div>
                        )}

                        {extraContent && (
                            <motion.div variants={textVariants} className="mt-8 w-full">
                                {extraContent}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper for narrative


export default StoryChapter;
