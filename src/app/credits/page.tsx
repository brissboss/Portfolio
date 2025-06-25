import Link from 'next/link';

export default function Credit() {
	return (
		<main className="mx-auto mt-20 max-w-3xl space-y-6 px-4 sm:mt-50">
			<h1 className="text-3xl font-bold">🧾 Crédits</h1>
			<p>
				Ce site a été conçu avec soin en m’inspirant de projets et d’idées créatives
				partagées par la communauté. Un grand merci à :
			</p>
			<ul className="space-y-4">
				<li>
					<strong>Layout du portfolio</strong> <br />
					Inspiré du site de{' '}
					<Link
						href="https://aayushbharti.in/"
						className="text-primary transition-all hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Aayush Bharti
					</Link>
				</li>
				<li>
					<strong>Effet Liquid Glass</strong> <br />
					Basé sur le travail de{' '}
					<Link
						href="https://github.com/rebane2001"
						className="text-primary transition-all hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						rebane2001
					</Link>{' '}
					sur GitHub
				</li>
			</ul>
			<p>
				Merci à toutes les personnes qui partagent leur travail, leurs idées et leurs
				projets open-source 🙌
			</p>
		</main>
	);
}
