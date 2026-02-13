import { motion } from 'framer-motion';

const NanobanaImage = ({ src, alt, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true, margin: "-10%" }}
        className={`relative group ${className}`}
    >
        <div
            className="absolute inset-0 bg-[#5D4037] transform translate-x-2 translate-y-2 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"
        />
        <motion.img
            src={src}
            alt={alt}
            className="w-full h-auto border-4 border-[#5D4037] shadow-xl relative z-10 bg-white"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        />
    </motion.div>
);

export default NanobanaImage;
