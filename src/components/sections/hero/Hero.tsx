import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Hero() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (!window) return;

		setWindowSize({ x: window.innerWidth, y: window.innerHeight });
	}, []);

	return (
		<section
			onPointerMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
			className="relative flex min-h-screen items-center justify-center px-4"
		>
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="animate-float-slow absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#ffa600] opacity-10 blur-3xl" />
				<div className="animate-float-fast absolute top-2/3 left-2/3 h-80 w-80 rounded-full bg-[#ff6d00] opacity-10 blur-3xl" />
				<div className="animate-pulse-slow absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#ffa600] via-[#ff6d00] to-[#ff4000] opacity-20 blur-[180px]" />
			</div>

			<div className="relative z-10 flex max-w-4xl items-center gap-6">
				<Card
					className="relative flex-col gap-4 px-8 py-9 text-center md:flex-row"
					variant="blur"
				>
					<motion.div
						className="relative -left-4 hidden h-81 w-full md:block md:w-1/2"
						initial={{ rotate: 0 }}
						animate={{ rotate: -8, transition: { duration: 0.5 } }}
						whileHover={{
							rotate: -3,
							scale: 1.3,
							x: -30,
							transition: { duration: 0.15 },
						}}
					>
						<Image
							src="/profile.png"
							alt="Théo Brissiaud"
							className="bg-primary -mr-8 rounded shadow-lg"
							fill={true}
							objectFit="cover"
						/>
					</motion.div>
					<div>
						<Badge className="border-primary relative mb-4 inline-block sm:mb-0">
							Disponible
						</Badge>

						<motion.div
							initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
							animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 0.5 }}
						>
							<AnimatedText
								className="text-4xl font-bold tracking-normal text-white md:text-6xl/22"
								text="Théo Brissiaud"
							/>
							<p className="mt-4 text-xl text-gray-300 md:text-2xl">
								Développeur Front-end passionné par l’UX, l’UI et les projets bien
								pensés.
							</p>
						</motion.div>
						<div className="mt-4 flex flex-wrap justify-center gap-2">
							<Badge>
								<div className="rounded-full">
									<Image
										src="https://cdn.simpleicons.org/vue.js"
										alt={'pnpm logo'}
										width={14}
										height={14}
									/>
								</div>
								Vue.js
							</Badge>
							<Badge>
								<div className="rounded-full">
									<Image
										src="https://cdn.simpleicons.org/react"
										alt={'pnpm logo'}
										width={14}
										height={14}
									/>
								</div>
								React
							</Badge>
							<Badge>
								<div className="rounded-full">
									<Image
										src="https://cdn.simpleicons.org/typescript"
										alt={'pnpm logo'}
										width={14}
										height={14}
									/>
								</div>
								Typescript
							</Badge>
							<Badge>
								<div className="rounded-full">
									<Image
										src="https://cdn.simpleicons.org/tailwindcss"
										alt={'pnpm logo'}
										width={14}
										height={14}
									/>
								</div>
								TailwindCSS
							</Badge>
						</div>

						<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
							<Button href="/cv_theo_brissiaud.pdf" download>
								<Download />
								Télécharger mon CV
							</Button>
						</div>
					</div>
				</Card>
			</div>
			<Button
				onClick={(e) => {
					e.preventDefault();
					const target = document.querySelector('#about');
					if (target && window.lenis) {
						window.lenis.scrollTo(target as HTMLElement);
					}
				}}
				size="icon"
				variant="blur"
				className="left-[calc(50% - 26px)] absolute bottom-12 hover:-translate-y-1 sm:bottom-4"
			>
				<ArrowDown />
			</Button>
			<motion.div
				className="pointer-events-none absolute z-0 hidden h-100 w-100 rounded-full bg-[#ffa600] opacity-10 blur-3xl md:block"
				animate={{ x: pos.x - windowSize.x / 2, y: pos.y - windowSize.y / 2 }}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			/>
		</section>
	);
}
