import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { cn } from '@/libs/utils';

export default function ImageCard({
	className,
	src,
	location,
	rotate,
	emplacement,
}: {
	className?: string;
	src: string;
	location?: string;
	rotate: { initial: number; hover: number };
	emplacement: {
		initinial: { x: number; y: number };
		animate: { x: number; y: number };
		hover: { x: number; y: number };
	};
}) {
	return (
		<motion.div
			className={cn('group absolute overflow-hidden rounded', className)}
			initial={{
				rotate: rotate.initial,
				x: emplacement.initinial.x,
				y: emplacement.initinial.y,
				scale: 0.6,
				opacity: 0.2,
			}}
			animate={{ scale: 1, y: emplacement.animate.x, x: emplacement.animate.y, opacity: 1 }}
			whileHover={{
				scale: 1.5,
				rotate: rotate.hover,
				zIndex: 100,
				y: emplacement.hover.y,
				x: emplacement.hover.x,
			}}
			transition={{ duration: 0.4 }}
		>
			<Image src={src} alt="Mon chien" width={250} height={500} />
			{location && (
				<div className="absolute -bottom-20 left-0 min-h-10 w-full bg-linear-to-b from-[#000000430] to-[#000000] px-4 transition-all duration-300 group-hover:bottom-0">
					<div>
						<div className="mb-2 flex flex-col gap-1">
							<MapPin className="h-5 w-5 text-white" />
							<p className="text-md font-semibold text-neutral-300">{location}</p>
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
}
