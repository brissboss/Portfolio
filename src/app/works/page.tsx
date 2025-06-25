import ProjectsScroll from '@/components/sections/projects/ProjectsScroll';
import ProjectsMobile from '@/components/sections/projects/ProjectsMobile';

export default function Works() {
	return (
		<section className="relative mx-auto mt-50 flex min-h-screen max-w-6xl items-center justify-center px-4">
			<ProjectsScroll className="hidden md:grid" />
			<ProjectsMobile className="md:hidden" />
		</section>
	);
}
