'use client';

import { usePathname } from 'next/navigation';
import Item from './Item';
import '@/styles/glass.css';
import { Home, User, FolderCode, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const pathName = usePathname();
	const page = pathName.split('/')[1];

	return (
		<header className="fixed top-4 z-999 flex w-full justify-center">
			<nav className="glassmorphism-element">
				<ul className="flex">
					<Link href="/" className="z-10">
						<Item selected={page === ''}>
							<Home className="h-6 w-6 p-0 sm:h-5 sm:w-5" />
							<p className="hidden sm:block">Accueil</p>
						</Item>
					</Link>
					<Link href="/about" className="z-10">
						<Item selected={page === 'about'}>
							<User className="h-6 w-6 sm:h-5 sm:w-5" />
							<p className="hidden sm:block">À propos</p>
						</Item>
					</Link>
					<Link href="/works" className="z-10">
						<Item selected={page === 'works'}>
							<FolderCode className="h-6 w-6 sm:h-5 sm:w-5" />
							<p className="hidden sm:block">Projets</p>
						</Item>
					</Link>
					<Link
						href="https://linkedin.com/in/theo-brissiaud"
						className="z-10"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Item>
							<Linkedin className="h-6 w-6 sm:h-5 sm:w-5" />
						</Item>
					</Link>
					<Link
						href="https://github.com/brissboss"
						className="z-10"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Item>
							<Github className="h-6 w-6 sm:h-5 sm:w-5" />
						</Item>
					</Link>
				</ul>
			</nav>
		</header>
	);
}
