import type { Experience } from '@/data/experiences';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '@/styles/markdown.css';
import { Badge } from '@/components/ui/Badge';
import { BriefcaseBusiness, MapPin } from 'lucide-react';

export default function ExperienceBlock({ experience }: { experience: Experience }) {
	return (
		<li className="img-container flex flex-col items-center justify-start sm:mt-50 sm:h-screen sm:w-screen md:mt-56 2xl:mt-80">
			<div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start">
				<div className="flex w-full gap-6 px-4 sm:w-fit sm:flex-col sm:gap-2 sm:px-0">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<p className="text-sm text-neutral-400">
								{experience.duration.start} - {experience.duration.end}
							</p>
							<h2 className="text-lg">{experience.name}</h2>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 text-neutral-400">
								<MapPin size={20} />
								<p>{experience.location}</p>
							</div>
							{experience.remote && (
								<div className="flex items-center gap-2 text-neutral-400">
									<BriefcaseBusiness size={20} />
									<p>Remote</p>
								</div>
							)}
						</div>
					</div>
					{experience.images && (
						<div className="flex h-[120px] items-center justify-center sm:h-[140px]">
							<Image
								src={experience.images}
								alt={`${experience.name} logo`}
								height={140}
								width={140}
								objectFit="cover"
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col gap-4 px-4 sm:max-w-[50%] sm:px-0">
					<h2 className="text-xl font-semibold">{experience.title}</h2>
					<div className="markdown-content text-xs sm:text-base">
						<ReactMarkdown remarkPlugins={[remarkGfm]}>
							{experience.description}
						</ReactMarkdown>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						{experience.techs.map((tech, i) => (
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
			</div>
		</li>
	);
}
