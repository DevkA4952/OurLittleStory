import { motion } from 'framer-motion';

const DoodleLayer = ({ color = 'var(--color-romantic-red)' }) => {
    // Random positions for simple doodles
    // Using simple SVG shapes as "doodles"

    const doodles = [
        { type: 'star', x: '10%', y: '15vh', rot: 15, scale: 0.8 },
        { type: 'heart', x: '85%', y: '35vh', rot: -10, scale: 1.2 },
        { type: 'cat', x: '5%', y: '65vh', rot: 5, scale: 0.9 },
        { type: 'flower', x: '90%', y: '85vh', rot: 20, scale: 1.1 },

        { type: 'star', x: '80%', y: '125vh', rot: -15, scale: 0.7 },
        { type: 'heart', x: '15%', y: '165vh', rot: 10, scale: 1.0 },

        { type: 'flower', x: '10%', y: '255vh', rot: -5, scale: 0.9 },
        { type: 'cat', x: '85%', y: '315vh', rot: 8, scale: 1.1 },
    ];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
            {doodles.map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: d.scale, rotate: d.rot }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    style={{
                        position: 'absolute',
                        left: d.x,
                        top: d.y,
                        color: color // Use the color prop here
                    }}
                    className="text-romantic-red/40"
                >
                    {d.type === 'star' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    )}
                    {d.type === 'heart' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    )}
                    {d.type === 'cat' && (
                        // Simple cat outline
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.28.61.24 1.09.75 1.32 1.38.56 1.54-.53 4.58-2.58 6.13A9.99 9.99 0 0 1 2 12a10 10 0 0 1 10-7z" />
                        </svg>
                    )}
                    {d.type === 'flower' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5z"></path><path d="M12 7.5V3.5"></path><path d="M12 20.5v-4"></path><path d="M7.5 12H3.5"></path><path d="M20.5 12h-4"></path></svg>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default DoodleLayer;
