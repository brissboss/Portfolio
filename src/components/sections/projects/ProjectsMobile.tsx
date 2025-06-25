'use client';

import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import ProjectDescription from './ProjectDescription';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/libs/utils';

export default function ProjectsMobile({ className, max }: { className?: string; max?: number }) {
	return (
		<div className={cn('flex flex-col gap-18', className)}>
			{projects.map((project, index) => {
				if (max && index > max) return;

				return (
					<motion.div
						key={index}
						className="flex flex-col gap-6"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}
					>
						<Link
							href={project.github || '#'}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div
								className={`${project.color ? '' : 'border-primary'} relative w-full overflow-hidden rounded border bg-neutral-800 p-2 shadow-lg transition-colors`}
								style={{ borderColor: project.color }}
							>
								<Image
									src={project.image}
									alt={project.title}
									width={800}
									height={600}
									className="h-auto w-full rounded-sm object-cover"
								/>
							</div>
						</Link>
						<ProjectDescription data={project} className="lg:hidden" />
					</motion.div>
				);
			})}
		</div>
	);
}
