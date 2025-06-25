import type { Project } from '@/data/projects';
import { Sparkle } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/libs/utils';
import Link from 'next/link';

export default function ProjectDescription({
	className,
	data,
}: {
	className?: string;
	data: Project;
}) {
	return (
		<div className={cn('flex flex-col gap-6', className)}>
			<div className="flex flex-col gap-2">
				<h3
					className={`${data.color ? '' : 'text-primary'} text-2xl font-bold`}
					style={{ color: data.color }}
				>
					{data.title}
				</h3>
				<p className="text-gray-300">{data.description}</p>
				{data.link && (
					<Link
						href={data.link}
						className={`${!data.color ? 'text-primary' : ''} transition-all hover:underline`}
						style={{ color: data.color }}
						target="_blank"
						rel="noopener noreferrer"
					>
						{data.link}
					</Link>
				)}
			</div>

			<ul className="flex flex-col gap-4">
				{data.keyFeatures.map((feature, i) => (
					<li key={i} className="flex items-center gap-4">
						<Sparkle
							className={`${data.color ? '' : 'text-primary'} h-4 w-4 shrink-0 rotate-30`}
							style={{ color: data.color }}
						/>
						{feature}
					</li>
				))}
			</ul>

			<div className="flex flex-wrap items-center gap-2">
				{data.techs.map((tech, i) => (
					<Badge key={i}>
						<Image
							src={`https://cdn.simpleicons.org/${tech.url}/${tech.color ?? `${tech.color}`}`}
							alt={`${tech.name} logo`}
							width={14}
							height={14}
						/>
						{tech.name}
					</Badge>
				))}
			</div>
		</div>
	);
}
