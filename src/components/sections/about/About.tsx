'use client';

import CapacityCard from './CapacityCard';
import HardSkillsCard from './HardSkillsCard';
import LocationCard from './LocationCard';
import TimelineCard from './TimelineCard';

export default function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl px-4 py-24">
			<h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
				À propos de moi
			</h2>
			<div className="grid grid-cols-1 gap-6 sm:auto-rows-[180px] md:grid-cols-7">
				<TimelineCard />
				<HardSkillsCard />
				<LocationCard />
				<CapacityCard />
			</div>
		</section>
	);
}
