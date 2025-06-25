import { Card } from '@/components/ui/Card';
import { CheckCircle } from 'lucide-react';

const softSkills = [
	'Curieux et toujours prêt à apprendre',
	'À l’aise dans les petites et grandes équipes',
	'Autonome et adaptable',
	'Ponctuel et rigoureux',
];

export default function CapacityCard() {
	return (
		<Card className="group col-span-1 h-fit px-4 py-6 md:col-span-3 md:h-full">
			<h3 className="z-10 mb-4 w-full bg-linear-to-b from-[#ffca69] to-[#ffa600] bg-clip-text text-2xl font-bold tracking-tighter text-transparent dark:from-[#ffca69]">
				Mes atouts humains
			</h3>
			<div className="grid grid-cols-1 space-y-4 text-sm text-gray-300 sm:text-base md:grid-cols-2 md:text-xs lg:text-sm">
				{softSkills.map((skill, index) => (
					<div key={index} className="flex items-start gap-3">
						<CheckCircle className="text-primary sm:text-primary/60 group-hover:text-primary size-4 shrink-0 transition-all" />
						<span className="leading-tight">{skill}</span>
					</div>
				))}
			</div>
		</Card>
	);
}
