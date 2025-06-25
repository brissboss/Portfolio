import { cn } from '@/libs/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

export default function Marquee({
	technos,
	direction = 'left',
}: {
	technos: { name: string; icon: string }[];
	direction?: 'left' | 'right';
}) {
	return (
		<div className="group flex overflow-hidden">
			{[...Array(2)].map((_, i) => (
				<div
					key={i}
					className={cn(
						'flex gap-5 pr-5 will-change-transform group-hover:[animation-play-state:paused]',
						direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
					)}
				>
					{[...technos].map((tech, index) => (
						<Badge key={index} className="flex items-center pr-6" variant="blur">
							<Image src={tech.icon} alt={tech.name} width={14} height={14} />
							{tech.name}
						</Badge>
					))}
				</div>
			))}
		</div>
	);
}
