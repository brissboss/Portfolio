'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectDescription from './ProjectDescription';
import { Badge } from '@/components/ui/Badge';
import { Github } from 'lucide-react';
import { cn } from '@/libs/utils';
import { projects } from '@/data/projects';

export default function ProjectsScroll({ className, max }: { className?: string; max?: number }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const refs = useRef<(HTMLElement | null)[]>([]);
	const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

	useEffect(() => {
		function handleResize() {
			setDescriptionHeight(window.innerHeight * 0.6);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const elements = refs.current; // snapshot
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Number(entry.target.getAttribute('data-index'));
					if (entry.isIntersecting) {
						setActiveIndex(index);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.7,
			}
		);

		elements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => {
			elements.forEach((el) => {
				if (el) observer.unobserve(el);
			});
		};
	}, []);

	useEffect(() => {
		function handleResize() {
			setDescriptionHeight(window.innerHeight * 0.6);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className={cn('relative grid grid-cols-3 gap-12', className)}>
			<div className="col-span-2 flex flex-col items-start gap-34">
				{projects.map((project, index) => {
					if (max && index > max) return;

					return (
						<motion.div
							key={index}
							className="flex h-[calc(60vh)] flex-col justify-start gap-8"
							data-index={index}
							ref={(el) => {
								refs.current[index] = el;
							}}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ amount: 0.8 }}
						>
							<motion.div variants={visibilityVariants}>
								<Link
									href={project.github || '#'}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										'group',
										!project.github ? 'pointer-events-none cursor-default' : ''
									)}
								>
									<div
										className={`${project.color ? '' : 'border-primary'} relative flex w-full justify-center overflow-hidden rounded border bg-neutral-800 p-2 shadow-lg transition-colors`}
										style={{ borderColor: project.color }}
									>
										<Image
											src={project.image}
											alt={project.title}
											width={800}
											height={600}
											className="h-auto w-full rounded-sm object-cover"
										/>
										<div className="absolute top-0 left-0 z-10 hidden h-full w-full items-center justify-center bg-white/5 backdrop-blur-[2px] transition-all group-hover:flex">
											<Badge
												className="mx-auto hidden h-fit w-fit text-xl group-hover:flex"
												variant="blur"
											>
												<Github />
												Github
											</Badge>
										</div>
									</div>
								</Link>
							</motion.div>
						</motion.div>
					);
				})}
			</div>

			<div className="sticky top-1/5 min-h-[13.5%]" style={{ height: descriptionHeight }}>
				<ProjectDescription data={projects[activeIndex]} />
			</div>
		</div>
	);
}

const visibilityVariants: Variants = {
	offscreen: {
		opacity: 0,
		scale: 0.8,
	},
	onscreen: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};
