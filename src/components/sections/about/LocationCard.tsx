import { Card } from '@/components/ui/Card';
import createGlobe from 'cobe';
import { MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function LocationCard() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const focusRef = useRef([0, 0]);
	const locationToAngles = (lat: number, long: number) => {
		return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
	};

	useEffect(() => {
		const width = 500;
		let currentPhi = 0;
		let currentTheta = 0;
		const doublePi = Math.PI * 2;

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: 450 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 15000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [1, 0.4, 0],
			glowColor: [1, 0.65, 0],
			offset: [150, 700],
			scale: 1.7,
			markers: [{ location: [48.936148106308195, 2.3574687242085166], size: 0.05 }],
			onRender: (state) => {
				state.phi = currentPhi;
				state.theta = currentTheta;
				const [focusPhi, focusTheta] = focusRef.current;
				const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
				const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;
				if (distPositive < distNegative) {
					currentPhi += distPositive * 0.1;
				} else {
					currentPhi -= distNegative * 0.1;
				}
				currentTheta = currentTheta * 0.75 + focusTheta * 0.08;
				state.width = width * 2;
				state.height = width * 2;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	useEffect(() => {
		setTimeout(
			() => (focusRef.current = locationToAngles(48.936148106308195, 2.3574687242085166)),
			300
		);
	}, []);

	return (
		<Card className="group relative col-span-1 row-span-2 min-h-[300px] overflow-hidden py-6 md:col-span-4">
			<h3 className="z-10 mb-4 w-full bg-linear-to-b from-[#ffca69] to-[#ffa600] bg-clip-text px-4 pb-2 text-3xl font-bold tracking-tighter text-transparent dark:from-[#ffca69]">
				Disponible partout,
				<br /> basé à Paris
			</h3>
			<canvas
				ref={canvasRef}
				style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: 1 }}
				className="absolute bottom-0 left-0 rounded"
			/>
			<div className="absolute -bottom-12 left-0 min-h-10 w-full bg-linear-to-b from-[#000000430] to-[#000000] px-4 transition-all group-hover:bottom-0">
				<div>
					<div className="mb-2 flex flex-col gap-2">
						<MapPin className="h-10 w-10 text-neutral-500 transition-all group-hover:h-8 group-hover:w-8" />
						<p className="text-xl font-semibold text-neutral-300">
							Saint-Denis, France
						</p>
					</div>
					<p className="mb-8 text-sm text-neutral-400">
						Disponible en remote et dans un rayon de 25 km
					</p>
				</div>
			</div>
		</Card>
	);
}
