import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import OpeningRibbon from './components/OpeningRibbon';
import StoryChapter from './components/StoryChapter'; // Updated Editorial + Postcard
import Proposal from './components/Proposal'; // Updated Video + Runaway
import MusicCard from './components/MusicCard'; // Updated Lyrics
import RiddleSection from './components/RiddleSection'; // New Paper Note
import HeartRain from './components/HeartRain'; // Updated Red/White
import DoodleLayer from './components/DoodleLayer'; // New Doodles

// Exact image paths requested
const images = {
    ch1: "/images/img1.png",
    ch2: "/images/img2.png",
    ch3: "/images/img3.png",
    ch4: "/images/img4.png",
    ch5: "/images/img5.png",
    ch6: "/images/img6.png"
};

function App() {
    const [isOpened, setIsOpened] = useState(false);

    // Initialize smooth scrolling with Lenis
    useEffect(() => {
        if (isOpened) {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                smooth: true,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
            return () => lenis.destroy();
        }
    }, [isOpened]);

    return (
        <div className="bg-white min-h-screen text-gray-900 selection:bg-romantic-red selection:text-white overflow-hidden relative">
            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <OpeningRibbon key="ribbon" onOpen={() => setIsOpened(true)} />
                ) : (
                    <motion.main
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-0 w-full"
                    >
                        <HeartRain />
                        <DoodleLayer />

                        {/* Hero Section */}
                        {/* Hero Section - Full Screen Red Background */}
                        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-romantic-red">

                            {/* 1. White Hearts and Doodles for Hero Only */}
                            <HeartRain color="white" />
                            <DoodleLayer color="white" />

                            {/* 2. Main Heading - White and Handwritten */}
                            <h1 className="font-display text-7xl md:text-9xl text-white text-center z-10 leading-[0.8] tracking-normal lowercase drop-shadow-2xl">
                                OUR LITTLE<br />story
                            </h1>

                            {/* 3. Subtext - White Bordered Note */}
                            <p className="mt-12 font-hand text-3xl text-white/90 rotate-[-2deg] px-6 py-2 border-2 border-dashed border-white/40 bg-white/10 backdrop-blur-sm rounded-sm z-10">
                                sroll down to unveil the story...
                            </p>

                            {/* 4. More Decorative Hero Doodles (Requested) */}
                            <div className="absolute inset-0 pointer-events-none z-10">
                                {/* Top-Left Stars */}
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.5 }} className="absolute top-10 left-10 text-white text-6xl rotate-12">✨</motion.div>

                                {/* Bottom-Right Clouds */}
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 0.7 }} className="absolute bottom-20 right-20 text-white text-7xl -rotate-6">⭐</motion.div>

                                {/* Floating Pencil/Art Icons */}
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-1/4 right-1/4 text-white text-5xl opacity-40">🤍</motion.div>
                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-1/3 left-1/4 text-white text-6xl opacity-40">🫧</motion.div>

                                {/* Center-Right Hearts */}
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-1/3 right-10 text-white text-4xl opacity-30">💖</motion.div>
                            </div>
                        </section>



                        {/* Chapter 1: The First Sight */}
                        <StoryChapter
                            chapterIndex={1}
                            title="FIRST SIGHT"
                            narrative="That was the first glance they shared, the first of the rest of their lives together."
                            imageSrc={images.ch1}
                            imageLeft={false}
                        />

                        {/* Chapter 2: The Kindness */}
                        <StoryChapter
                            chapterIndex={2}
                            title="THE KINDNESS"
                            poem={`A sharp word hushed by a gentle hand,\nThe kindest soul in all the land.`}
                            narrative="Through the chaos, a gentle voice emerged."
                            imageSrc={images.ch2}
                            imageLeft={true}
                        />

                        {/* Riddle Section inserted between Ch2 and Ch3 */}
                        <RiddleSection />

                        {/* Chapter 3: The Reconnection */}
                        <StoryChapter
                            chapterIndex={3}
                            title="RECONNECTION"
                            narrative="The next day, those round spectacles returned."
                            imageSrc={images.ch3}
                            imageLeft={false}
                        />

                        {/* Chapter 4: Growth / Lyrics */}
                        <StoryChapter
                            chapterIndex={4}
                            title="GROWTH"
                            narrative="From long walks to late night calls."
                            imageSrc={images.ch4}
                            imageLeft={true}
                            extraContent={<MusicCard />}
                        />

                        {/* Chapter 5: The Plan */}
                        <StoryChapter
                            chapterIndex={5}
                            title="THE PLAN"
                            narrative="Two hearts beating with the same design."
                            imageSrc={images.ch5}
                            imageLeft={false}
                            extraContent={
                                <div className="bg-romantic-red text-white p-4 rotate-2 rounded-lg inline-block mt-4 shadow-postcard font-hand text-2xl">
                                    "Are you a camera? Cause every time I look at you, I smile."
                                </div>
                            }
                        />

                        {/* Chapter 6: The Forever */}
                        <StoryChapter
                            chapterIndex={6}
                            title="FOREVER"
                            narrative="Surrounded by flowers and the same nervous letters, we finally found our answer."
                            imageSrc={images.ch6}
                            imageLeft={true}
                        />

                        {/* Proposal Finale */}
                        <Proposal />

                        <footer className="py-24 text-center border-t-2 border-dashed border-gray-200 mt-12 bg-[#fdfbf7]">
                            <p className="font-hand text-gray-400 text-2xl">
                                Made with love ❤️
                            </p>
                        </footer>
                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;

