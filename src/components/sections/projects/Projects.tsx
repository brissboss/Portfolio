import Button from '@/components/ui/Button';
import ProjectsScroll from './ProjectsScroll';
import { ChevronRight } from 'lucide-react';
import ProjectsMobile from './ProjectsMobile';

export default function Projects() {
	return (
		<section id="projects" className="relative mx-auto max-w-6xl px-4">
			<h2 className="mb-24 text-center text-3xl font-bold text-white lg:text-4xl">
				Mes projets
			</h2>
			<ProjectsScroll max={2} className="hidden md:grid" />
			<ProjectsMobile max={2} className="md:hidden" />
			<Button className="mx-auto mt-16 w-fit" variant="ghost" href="/works">
				Voir plus de projets
				<ChevronRight />
			</Button>
		</section>
	);
}
