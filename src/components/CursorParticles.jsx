import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

// Soft-red glowing heart particle
const HeartParticle = ({ x, y }) => {
    // Random drift
    const randomDelay = Math.random() * 2;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x, y }}
            animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.2, 0],
                y: y - 100, // drift upwards
                x: x + (Math.random() - 0.5) * 50
            }}
            transition={{ duration: 4, ease: "easeOut", delay: randomDelay }}
            className="fixed text-merlot/40 pointer-events-none z-0 blur-[1px]"
            style={{
                fontSize: Math.random() * 20 + 10 + 'px',
                textShadow: "0 0 10px rgba(212, 175, 55, 0.2)"
            }}
        >
            ♥
        </motion.div>
    );
};

const CursorParticles = () => {
    const [particles, setParticles] = useState([]);
    const countRef = useRef(0);

    // Magnetic cursor tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Spawn particles occasionally
            if (countRef.current % 15 === 0) {
                const id = Date.now();
                setParticles(prev => [...prev.slice(-20), { id, x: e.clientX, y: e.clientY }]);
            }
            countRef.current++;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Magnetic Glow Follower */}
            <motion.div
                style={{ x: cursorX, y: cursorY }}
                className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-gold/30 pointer-events-none z-50 mix-blend-screen"
            />
            <motion.div
                style={{ x: cursorX, y: cursorY }}
                className="fixed top-0 left-0 w-96 h-96 -ml-48 -mt-48 bg-gold/5 rounded-full blur-3xl pointer-events-none z-0"
            />

            {/* Floating Particles */}
            {particles.map(p => (
                <HeartParticle key={p.id} x={p.x} y={p.y} />
            ))}
        </>
    );
};

export default CursorParticles;
