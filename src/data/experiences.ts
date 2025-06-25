export type Experience = {
	name: string;
	location: string;
	duration: { start: string; end: string };
	remote: boolean;
	title: string;
	description: string;
	techs: {
		name: string;
		url?: string;
		color?: string;
	}[];
	images?: string;
};

export const experiences: Experience[] = [
	{
		name: 'École 42',
		location: 'Mulhouse - France',
		duration: { start: 'Février 2022', end: 'Octobre 2024' },
		remote: false,
		title: 'Formation développeur',
		description: `J’ai intégré [l’école 42](https://42.fr) en 2022, une formation intensive et gratuite, fondée sur l’apprentissage par projets et l’autonomie.


J’ai suivi le **tronc commun**, où j’ai développé de solides bases en programmation bas-niveau (C et C++) :
- Gestion de la mémoire
- Processus et signaux
- Création de mini-shell et autres outils en ligne de commande

Peu à peu, je me suis tourné vers le **développement web**, en explorant le front-end et le back-end. J’ai découvert React, et commencé à créer mes propres projets.`,
		techs: [
			{
				name: 'C',
				url: 'c',
			},
			{
				name: 'C++',
				url: 'cplusplus',
			},
			{
				name: 'Git',
				url: 'git',
			},
			{
				name: 'Docker',
				url: 'docker',
			},
			{
				name: 'HTML',
				url: 'html5',
			},
			{
				name: 'CSS',
				url: 'css',
			},
			{
				name: 'Javascript',
				url: 'javascript',
			},
			{
				name: 'React',
				url: 'react',
			},
		],
		images: '/logos/42.svg',
	},
	{
		name: 'Pecule.co',
		location: 'Paris - France',
		duration: { start: 'Janvier 2024', end: 'Octobre 2024' },
		remote: true,
		title: 'Développeur Front-end stagiare',
		description: `Lors de mon stage chez [Pecule.co](https://pecule.co), j’ai eu l’opportunité de travailler en autonomie sur la refonte complète du back-office à destination des clients.

J’ai utilisé **Vue.js**, **Nuxt** et **Nuxt UI Pro** pour concevoir une interface moderne, intuitive et adaptable.

Mon rôle comprenait :

- L’architecture et la mise en place de l’interface
- La définition des parcours utilisateurs
- L’intégration responsive des vues

Cette expérience m’a permis de monter en compétences sur l’écosystème Vue et la conception d’interfaces administratives personnalisables.`,
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
				name: 'TailwindCSS',
				url: 'tailwindcss',
			},
			{
				name: 'Typescript',
				url: 'typescript',
			},
			{
				name: 'Echarts',
				url: 'apacheecharts',
			},
			{
				name: 'Figma',
				url: 'figma',
			},
		],
		images: '/logos/pecule.png',
	},
	{
		name: 'Pecule.co',
		location: 'Paris - France',
		duration: { start: 'Octobre 2024', end: 'Juin 2025' },
		remote: true,
		title: 'Développeur Front-end',
		description: `Après mon stage, j’ai poursuivi l’aventure chez [Pecule.co](https://pecule.co) en tant que développeur freelance. J’ai continué à faire évoluer le back-office avec de nouvelles fonctionnalités et améliorations UX.

J’ai également repris presque de zéro la **marketplace en marque blanche**, dans le but d’en faire un produit solide, performant et facilement personnalisable pour les clients.

Mes missions comprenaient notamment :
- L’architecture front-end de la marketplace
- L’intégration responsive et dynamique
- L’adaptation des interfaces aux besoins clients

Cette expérience m’a permis de consolider mes compétences sur des projets concrets à fort enjeu, en autonomie.
`,
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
				name: 'Javascript',
				url: 'javascript',
			},
			{
				name: 'Alpine.js',
				url: 'alpinedotjs',
			},
			{
				name: 'TailwindCSS',
				url: 'tailwindcss',
			},
			{
				name: 'Figma',
				url: 'figma',
			},
		],
		images: '/logos/pecule.png',
	},
];
