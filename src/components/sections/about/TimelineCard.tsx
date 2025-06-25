import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export default function TimelineCard() {
	return (
		<Card className="group col-span-1 h-fit overflow-hidden p-6 sm:row-span-1 sm:h-full md:col-span-4">
			<h3 className="z-10 mb-2 w-full bg-linear-to-b from-[#ffca69] to-[#ffa600] bg-clip-text text-2xl font-bold tracking-tighter text-transparent dark:from-[#ffca69]">
				Mon parcours
			</h3>
			<div className="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
				<div className="bg-primary sm:bg-primary/60 group-hover:bg-primary/100 absolute top-0 left-5 z-0 h-[1000px] w-0.5 transition-all sm:top-5 sm:-right-6 sm:-left-6 sm:h-0.5 sm:w-[1000px]" />
				{[
					{
						title: 'École 42',
						date: '2022 – 2024',
						logo: '/logos/42.svg',
					},
					{
						title: 'Stage - Pecule',
						date: '2024',
						logo: '/logos/pecule.png',
					},
					{
						title: 'Freelance - Pecule',
						date: '2024 – Aujourd’hui',
						logo: '/logos/pecule.png',
					},
				].map((item, index) => (
					<div key={index} className="z-10 flex gap-4 sm:flex-col sm:gap-0">
						<div className="mb-2 flex size-10 items-center rounded bg-neutral-800 p-2">
							<Image src={item.logo} alt={item.title} width={30} height={30} />
						</div>
						<div>
							<p className="font-medium text-white">{item.title}</p>
							<p className="text-sm text-gray-400">{item.date}</p>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}
