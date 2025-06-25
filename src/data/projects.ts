export type Project = {
	image: string;
	title: string;
	description: string;
	keyFeatures: string[];
	techs: {
		name: string;
		url: string;
		color?: string;
	}[];
	github?: string;
	link?: string;
	color?: string;
};

export const projects: Project[] = [
	{
		image: '/projects/portfolio.png',
		title: 'Portfolio',
		description:
			'Site personnel conçu pour présenter mes projets, compétences techniques et parcours. Construit avec React et TailwindCSS pour une expérience élégante et moderne.',
		keyFeatures: [
			'Design glassmorphism responsive',
			'Animations fluides avec Motion',
			'Optimisé pour mobile et desktop',
			'Architecture modulaire et réutilisable',
		],
		techs: [
			{
				name: 'React',
				url: 'react',
			},
			{
				name: 'Next.js',
				url: 'next.js',
				color: 'fff',
			},
			{
				name: 'Typescript',
				url: 'typescript',
			},
			{
				name: 'Tailwind',
				url: 'tailwindcss',
			},
			{
				name: 'Motion.dev',
				url: 'framer',
			},
			{
				name: 'Vercel',
				url: 'vercel',
				color: 'fff',
			},
		],
		github: 'https://github.com/brissboss/Portfolio',
		link: 'https://theobrissiaud.fr',
	},
	{
		image: '/projects/splitly.png',
		title: 'Splitly',
		description:
			'Simulateur de répartition des dépenses conçu pour les couples souhaitant équilibrer leurs charges communes en fonction de leurs revenus.',
		keyFeatures: [
			'Calcul des contributions au prorata des salaires',
			'Interface simple et responsive',
			'Simulation instantanée sans création de compte',
		],
		techs: [
			{
				name: 'React',
				url: 'react',
			},
			{
				name: 'React Router',
				url: 'reactrouter',
			},
			{
				name: 'Redux',
				url: 'redux',
			},
			{
				name: 'Typescript',
				url: 'typescript',
			},
			{
				name: 'Tailwind',
				url: 'tailwindcss',
			},
			{
				name: 'Shadcn',
				url: 'shadcnui',
				color: 'fff',
			},
			{
				name: 'Zod',
				url: 'zod',
			},
			{
				name: 'i18next',
				url: 'i18next',
			},
			{
				name: 'Vercel',
				url: 'vercel',
				color: 'fff',
			},
		],
		github: 'https://github.com/brissboss/Splitly',
		link: 'https://splitly.theobrissiaud.fr',
		color: '#b15dff',
	},
	{
		image: '/projects/peculeDashboard.png',
		title: 'Pecule Back-office',
		description:
			'Back-office moderne et responsive développé avec Nuxt et Nuxt UI Pro pour administrer une marketplace de produits financiers en marque blanche.',
		keyFeatures: [
			'Interface administrable et personnalisable pour chaque client (marque blanche)',
			'Dashboard pensé UX-first : clair, rapide à prendre en main',
			'Connexion directe à une API Strapi pour la gestion centralisée des données',
		],
		techs: [
			{
				name: 'Vue.js',
				url: 'vue.js',
			},
			{
				name: 'Nuxt',
				url: 'nuxt',
			},
			{
				name: 'Typescript',
				url: 'typescript',
			},
			{
				name: 'Tailwind',
				url: 'tailwindcss',
			},
			{
				name: 'ECharts',
				url: 'apacheecharts',
			},
			{
				name: 'Strapi',
				url: 'strapi',
			},
			{
				name: 'Zod',
				url: 'zod',
			},
		],
		color: '#00c950',
	},
	{
		image: '/projects/peculeMarketplace.png',
		title: 'Pecule Marketplace',
		description:
			'Marketplace en marque blanche développée pour permettre aux clients de vendre des produits financiers tokenisés. Le site public, entièrement personnalisable, permet l’achat, le suivi des portefeuilles et la gestion des wallets liés à chaque utilisateur.',
		keyFeatures: [
			'Frontend 100 % personnalisable',
			'Espace utilisateur avec suivi des investissements, historique et wallet',
			'Adaptation visuelle par client : logo, couleurs, contenu modifiable facilement',
		],
		techs: [
			{
				name: 'PHP',
				url: 'php',
			},
			{
				name: 'Laravel',
				url: 'laravel',
			},
			{
				name: 'Wordpress',
				url: 'wordpress',
			},
			{
				name: 'Alpine.js',
				url: 'alpinedotjs',
			},
			{
				name: 'Tailwind',
				url: 'tailwindcss',
			},
			{
				name: 'ECharts',
				url: 'apacheecharts',
			},
		],
		color: '#c19a6a',
	},
];
