'use client';

import { scroll, animate, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { experiences } from '@/data/experiences';
import ExperienceBlock from './experienceBlock';
import React from 'react';

export default function TimelineSection() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (window.innerWidth <= 640) return;

		const items = document.querySelectorAll('.img-container');
		const group = document.querySelector('.img-group');
		const progress = document.querySelector('.progress')!;
		const avatar = document.querySelector('.avatar')!;

		if (group && items.length) {
			scroll(
				animate(group, {
					transform: ['none', `translateX(-${(items.length - 1) * 100}vw)`],
				}),
				{ target: containerRef.current ?? undefined }
			);
		}

		if (progress && avatar) {
			scroll((progress: number) => setProgress(progress), {
				target: containerRef.current ?? undefined,
			});

			scroll(animate(progress, { scaleX: [0, 100] }), {
				target: containerRef.current ?? undefined,
			});

			scroll(
				animate(avatar, {
					transform: ['translateX(0px)', `translateX(100dvw)`],
				}),
				{ target: containerRef.current ?? undefined }
			);
		}
	}, []);

	useEffect(() => {
		if (window.innerWidth > 640) return;

		const progressMobile = document.querySelector('.progress-mobile') as HTMLElement;
		const avatarMobile = document.querySelector('.avatar-mobile') as HTMLElement;

		if (progressMobile && avatarMobile && containerRef.current) {
			progressMobile.style.transition = 'transform 0.25s ease-out';
			avatarMobile.style.transition = 'transform 0.25s ease-out';

			scroll(
				(progress: number) => {
					const scaleValue = progress * 100;
					progressMobile.style.transform = `scaleY(${scaleValue}%)`;

					const containerHeight = containerRef.current!.clientHeight;
					const maxTranslateY = containerHeight - 80;
					const translateY = progress * maxTranslateY;

					avatarMobile.style.transform = `translateY(${translateY}px)`;

					setProgress(progress);
				},
				{
					target: containerRef.current,
				}
			);
		}
	}, []);

	return (
		<>
			<section
				id="timeline"
				className="relative h-fit pt-20 sm:h-[500vh] sm:pt-0"
				ref={containerRef}
			>
				<div className="flex sm:sticky sm:top-0 sm:h-[100dvh] sm:overflow-hidden">
					<div className="relative mx-6 flex justify-center sm:hidden">
						<div className="relative h-full w-[5px] overflow-hidden rounded border border-neutral-700 bg-neutral-800">
							<div className="progress-mobile bg-primary absolute top-0 bottom-0 h-[100%] w-[5px] origin-top rounded will-change-transform" />
						</div>
						<div className="avatar-mobile absolute top-0 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800">
							<div className="bg-primary relative h-8 w-8 overflow-hidden rounded-full">
								<Image src="/profile.png" fill alt="Théo Brissiaud" />
							</div>
						</div>
					</div>
					<ul className="img-group flex flex-col gap-20 will-change-transform sm:flex-row md:gap-0">
						{experiences.map((experience, i) => (
							<ExperienceBlock key={i} experience={experience} />
						))}
					</ul>
				</div>
				<motion.div
					className="top-[10%] right-0 left-0 hidden h-[5px] border border-neutral-700 bg-neutral-800 sm:fixed sm:block xl:top-[20%]"
					initial={{ opacity: 0 }}
					animate={{ opacity: progress > 0 && progress < 1 ? 100 : 0 }}
					transition={{ duration: 0.2 }}
				>
					<motion.div
						className="progress absolute top-[10%] right-0 left-0 h-[5px] origin-left scale-x-1 border border-neutral-700 bg-linear-to-r from-[#ffcc7b] to-[#ffa600] will-change-transform sm:fixed xl:top-[20%]"
						initial={{ opacity: 0 }}
						animate={{ opacity: progress === 1 || progress === 0 ? 0 : 100 }}
						transition={{ duration: 0.2 }}
					/>
				</motion.div>
				<motion.div
					className="avatar absolute top-[calc(10%-26px)] left-0 hidden h-14 w-14 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 sm:fixed sm:flex xl:top-[calc(20%-26px)]"
					initial={{ opacity: 0 }}
					animate={{ opacity: progress === 1 || progress === 0 ? 0 : 100 }}
					transition={{ duration: 0.2 }}
				>
					<div className="bg-primary relative h-12 w-12 overflow-hidden rounded-full">
						<Image src="/profile.png" fill alt="Théo Brissiaud" />
					</div>
				</motion.div>
			</section>
		</>
	);
}
