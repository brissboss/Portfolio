import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Footer() {
	return (
		<footer className="mt-20 flex items-center justify-center px-6 py-10 text-sm text-gray-400">
			<div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:gap-26">
				<div className="max-w-sm space-y-2">
					<p>
						Développeur front-end passionné, basé à Paris. J’aime créer des interfaces
						claires et intuitives.
					</p>
					<p>© 2025 Théo Brissiaud</p>
					<Button href="/cv_theo_brissiaud.pdf" download className="mt-4 h-8 w-fit">
						<Download />
						Télécharger mon CV
					</Button>
				</div>

				<div className="mt-4 flex flex-col justify-end gap-3">
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

				<div className="flex items-start gap-8">
					<div className="flex flex-col gap-2">
						<h5 className="font-semibold text-white">Général</h5>
						<Link href="/" className="hover:text-white">
							Accueil
						</Link>
						<Link href="/about" className="hover:text-white">
							À propos
						</Link>
						<Link href="/works" className="hover:text-white">
							Projets
						</Link>
					</div>
					<div className="flex flex-col gap-2">
						<h5 className="font-semibold text-white">Autre</h5>
						<Link href="/credits" className="hover:text-white">
							Crédits
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
