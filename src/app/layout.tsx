import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import LiquidGlassSvg from '@/components/LiquidGlassSvg';
import { Analytics } from '@vercel/analytics/next';

const outfit = Outfit({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Théo Brissiaud',
	description: 'Portfolio de Théo Brissiaud',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${outfit.className} flex min-h-screen flex-col`}>
				<LenisProvider>
					<LiquidGlassSvg />
					<Header />
					<div className="flex-1">{children}</div>
					<Footer />
				</LenisProvider>
				<Analytics />
			</body>
		</html>
	);
}
