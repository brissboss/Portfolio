import { motion } from 'motion/react';
import { cn } from '@/libs/utils';

export default function AnimatedText({ className, text }: { className?: string; text: string }) {
	const words = text.split(' ');

	return (
		<motion.p
			className={cn('flex flex-wrap justify-center gap-x-2 gap-y-1 text-balance', className)}
			initial="hidden"
			animate="visible"
			variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
		>
			{words.map((word, wordIndex) => (
				<motion.span
					key={wordIndex}
					className="flex gap-0.5 whitespace-nowrap"
					variants={{ visible: {} }}
					transition={{ delayChildren: wordIndex * 0.2, staggerChildren: 0.05 }}
				>
					{Array.from(word).map((char, i) => (
						<motion.span
							key={i}
							variants={{
								hidden: { opacity: 0, y: -20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.4 }}
						>
							{char}
						</motion.span>
					))}
				</motion.span>
			))}
		</motion.p>
	);
}
