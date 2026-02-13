import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const heartEmojis = ['❤️', '💖', '💌', '💕', '🌹'];

const HeartRain = ({ color = 'var(--color-romantic-red)' }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Create randomized heart particles
    const hearts = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        delay: Math.random() * 5,
        speed: Math.random() * 20 + 20,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 180
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: -100, x: `${heart.x}vw`, opacity: 0.8, rotate: heart.rotation }}
                    animate={{
                        y: '100vh',
                        rotate: heart.rotation + 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: heart.speed,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    style={{
                        fontSize: `${heart.scale * 1.5}rem`,
                        //color: '#E0115F'
                        color: color // Use the color prop here
                    }}
                >
                    {heart.emoji}
                </motion.div>
            ))}
        </div>
    );
};

export default HeartRain;
