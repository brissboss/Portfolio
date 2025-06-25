import { Card } from '../../ui/Card';
import Marquee from '../../ui/Marquee';

const technos = {
	front: [
		{ name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vue.js' },
		{ name: 'Nuxt', icon: 'https://cdn.simpleicons.org/nuxt' },
		{ name: 'React', icon: 'https://cdn.simpleicons.org/react' },
		{ name: 'Next', icon: 'https://cdn.simpleicons.org/next.js/fff' },
		{ name: 'Alpine.js', icon: 'https://cdn.simpleicons.org/alpinedotjs' },
		{ name: 'Typescript', icon: 'https://cdn.simpleicons.org/typescript' },
		{ name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
		{ name: 'Shadcn/ui', icon: 'https://cdn.simpleicons.org/shadcnui/fff' },
		{ name: 'Vuetify', icon: 'https://cdn.simpleicons.org/vuetify' },
		{ name: 'ECharts', icon: 'https://cdn.simpleicons.org/apacheecharts' },
		{ name: 'Zod', icon: 'https://cdn.simpleicons.org/zod' },
		{ name: 'Swift', icon: 'https://cdn.simpleicons.org/swift' },
	],
	back: [
		{ name: 'PHP', icon: 'https://cdn.simpleicons.org/php' },
		{ name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
		{ name: 'C', icon: 'https://cdn.simpleicons.org/c' },
		{ name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus' },
		{ name: 'Strapi', icon: 'https://cdn.simpleicons.org/strapi' },
		{ name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/fff' },
	],
	utils: [
		{ name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
		{ name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
		{ name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/fff' },
		{ name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/fff' },
		{ name: 'pnpm', icon: 'https://cdn.simpleicons.org/pnpm' },
		{ name: 'XCode', icon: 'https://cdn.simpleicons.org/xcode' },
		{ name: 'MacOS', icon: 'https://cdn.simpleicons.org/macos/fff' },
		{ name: 'Arc', icon: 'https://cdn.simpleicons.org/arc/fff' },
		{ name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/fff' },
	],
};

export default function HardSkillsCard() {
	return (
		<Card className="group/outer relative col-span-1 row-span-2 overflow-hidden py-6 md:col-span-3">
			<h3 className="mb-4 w-full bg-linear-to-b from-[#ffca69] to-[#ffa600] bg-clip-text px-4 pb-2 text-3xl font-bold tracking-tighter text-transparent">
				Les technologies qui me passionnent
			</h3>
			<div className="z-20 flex flex-col gap-8">
				<Marquee technos={technos.front} />
				<Marquee technos={technos.back} direction="right" />
				<Marquee technos={technos.utils} />
			</div>
			<div className="absolute -bottom-0.5 left-1/2 z-10 flex items-center justify-center">
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '0rem', height: '0rem', opacity: '0.9' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '4rem', height: '4rem', opacity: '0.8' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '8rem', height: '8rem', opacity: '0.7' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '12rem', height: '12rem', opacity: '0.6' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '16rem', height: '16rem', opacity: '0.5' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '20rem', height: '20rem', opacity: '0.4' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '24rem', height: '24rem', opacity: '0.3' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '28rem', height: '28rem', opacity: '0.2' }}
				></div>
				<div
					className="absolute left-1/2 -translate-x-1/2 rounded-full border border-neutral-700/40"
					style={{ width: '32rem', height: '32rem', opacity: '0.1' }}
				></div>
			</div>
			<div className="bg-primary sm:bg-primary/60 sm:group-hover/outer:bg-primary absolute -bottom-22 left-[calc(50%-76px)] size-38 rounded-full blur-3xl transition-all sm:-bottom-32"></div>
		</Card>
	);
}
