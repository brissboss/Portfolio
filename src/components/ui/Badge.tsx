import { cn } from '@/libs/utils';

function Badge({
	className,
	variant,
	...props
}: React.ComponentProps<'div'> & { variant?: 'default' | 'blur' }) {
	let badgeStyle = '';

	switch (variant) {
		case 'blur':
			badgeStyle = 'border border-white/10 bg-white/5 shadow-xl backdrop-blur-md';
			break;
		default:
			badgeStyle = 'border border-white/20 bg-white/10';
	}

	return (
		<div
			className={cn(
				'flex items-center gap-2 rounded-full px-3 py-1 text-sm text-white',
				badgeStyle,
				className
			)}
			{...props}
		/>
	);
}

export { Badge };
