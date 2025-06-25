'use client';

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import ImageCard from './ImageCard';
import Button from '@/components/ui/Button';

export default function Introduction() {
	return (
		<section className="relative mx-auto my-30 grid min-h-screen max-w-[1300px] grid-cols-1 gap-10 md:mt-0 md:grid-cols-2">
			<div className="mx-auto flex w-full flex-col justify-center px-4 md:px-0 md:pl-30">
				<h3 className="mb-4 text-4xl font-bold">
					Salut ! Moi c&apos;est{' '}
					<span className="bg-linear-to-b from-[#ffca69] to-[#ffa600] bg-clip-text tracking-normal text-transparent dark:from-[#ffca69]">
						Théo Brissiaud
					</span>
				</h3>
				<div className="flex flex-col gap-4 text-neutral-400">
					<p>
						Développeur front-end passionné par la création d’interfaces modernes et
						soignées. J’aime participer aux projets dès leurs débuts, surtout dans des
						environnements agiles.
					</p>
					<p>
						J’utilise principalement Vue.js, React, Nuxt et Next.js. Toujours curieux,
						je cherche constamment à apprendre et à améliorer mes compétences.
					</p>
					<p>
						En dehors du code, j’aime être dehors avec mon chien, voyager et découvrir
						de nouveaux endroits.
					</p>
					<p>
						Pour moi, un bon projet naît d’un œil attentif, de la curiosité… et d’un peu
						de plaisir à créer.
					</p>
				</div>
				<div className="mt-8 flex flex-col justify-end gap-3 text-neutral-400">
					<div className="flex items-center gap-4">
						<a
							href="https://github.com/brissboss"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="size-5 hover:text-white" />
						</a>
						<a
							href="https://www.linkedin.com/in/theo-brissiaud/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="size-5 hover:text-white" />
						</a>
						<a
							href="mailto:theobrissiaud@icloud.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Mail className="size-5 hover:text-white" />
						</a>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<div className="relative h-[600px] w-full px-4 sm:w-[500px]">
					<ImageCard
						src="/me/travel.png"
						location="Skógafoss, Islande"
						className="top-2 left-8 sm:z-10"
						rotate={{ initial: 3, hover: 0 }}
						emplacement={{
							initinial: { x: 0, y: -200 },
							animate: { x: 0, y: 0 },
							hover: { x: 50, y: 50 },
						}}
					/>
					<ImageCard
						src="/me/moto.png"
						location="Roselend, France"
						className="top-30 left-30 z-5 sm:top-20 sm:left-55"
						rotate={{ initial: 358, hover: 360 }}
						emplacement={{
							initinial: { x: 200, y: 0 },
							animate: { x: 0, y: 0 },
							hover: { x: 0, y: 0 },
						}}
					/>
					<ImageCard
						src="/me/dog.png"
						location="Deauville, France"
						className="bottom-2 left-8 z-7 sm:z-0"
						rotate={{ initial: 355, hover: 360 }}
						emplacement={{
							initinial: { x: 0, y: 200 },
							animate: { x: 0, y: 0 },
							hover: { x: 50, y: 0 },
						}}
					/>
				</div>
			</div>
			<Button
				onClick={(e) => {
					e.preventDefault();
					const target = document.querySelector('#timeline');
					if (target && window.lenis) {
						window.lenis.scrollTo(target as HTMLElement);
					}
				}}
				size="icon"
				variant="blur"
				className="absolute bottom-12 left-1/2 z-100 hidden hover:-translate-y-1 sm:bottom-4 sm:block"
			>
				<ArrowDown />
			</Button>
		</section>
	);
}
