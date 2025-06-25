import { cn } from '@/libs/utils';

export default function Button({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<'a'> & {
	variant?: 'default' | 'secondary' | 'blur' | 'glass' | 'ghost';
	size?: 'default' | 'icon';
}) {
	let buttonStyle = '';
	let buttonSize = '';

	switch (variant) {
		case 'secondary':
			buttonStyle = 'border border-white/20 text-white transition hover:bg-white/10';
			break;
		case 'blur':
			buttonStyle =
				'border border-white/10 bg-white/5 shadow-xl backdrop-blur-md hover:bg-white/10 transition';
			break;
		case 'glass':
			buttonStyle = 'glass';
			break;
		case 'ghost':
			buttonStyle = 'hover:bg-white/10 transition';
			break;
		default:
			buttonStyle = 'bg-primary text-primary-foreground hover:opacity-80 transition shadow';
	}

	switch (size) {
		case 'icon':
			buttonSize = 'rounded-[100%] size-13';
			break;
		default:
			buttonSize = 'rounded-3xl px-6 py-3';
	}

	return (
		<a
			className={cn(
				'flex cursor-pointer items-center justify-center gap-2 font-semibold',
				buttonSize,
				buttonStyle,
				className
			)}
			{...props}
		/>
	);
}
