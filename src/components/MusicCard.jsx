import { motion } from 'framer-motion';

const MusicCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-gray-100 p-6 rounded-[2px] shadow-sm max-w-sm mt-8 relative overflow-hidden group"
        >
            {/* Background Album Blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-romantic-red/5 rounded-full blur-3xl -z-10 group-hover:bg-romantic-red/10 transition-colors"></div>

            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite]">
                    <div className="w-6 h-6 bg-romantic-red rounded-full border-2 border-white"></div>
                </div>
                <div>
                    <h4 className="font-display text-xl text-gray-900 tracking-wider">PERFECT</h4>
                    <p className="font-hand text-lg text-gray-500">Ed Sheeran</p>
                </div>
            </div>

            <div className="space-y-2 mt-4">
                <p className="font-note text-sm text-gray-600 italic">"I found a love, for me..."</p>
                <p className="font-note text-sm text-gray-600 italic">"Darling, just dive right in..."</p>
                <p className="font-note text-sm text-gray-600 italic">"And follow my lead..."</p>
                <p className="font-note text-sm text-romantic-red font-bold">"I found a girl, beautiful and sweet"</p>
                <p className="font-note text-sm text-gray-600 italic">"I never knew you were the someone..."</p>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-100 w-full mt-6 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "45%" }}
                    transition={{ duration: 20, ease: "linear" }}
                    className="h-full bg-romantic-red"
                />
            </div>
        </motion.div>
    );
};

export default MusicCard;
