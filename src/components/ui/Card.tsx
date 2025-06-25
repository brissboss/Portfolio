import { cn } from '@/libs/utils';

function Card({
	className,
	variant,
	...props
}: React.ComponentProps<'div'> & { variant?: 'default' | 'blur' | 'glass' | 'ghost' }) {
	let cardStyle = '';

	switch (variant) {
		case 'blur':
			cardStyle = 'border border-white/10 bg-white/5 shadow-xl backdrop-blur-md';
			break;
		case 'glass':
			cardStyle = 'glass';
			break;
		case 'ghost':
			cardStyle = '';
			break;
		default:
			cardStyle =
				'border-border inset-shadow hover:inset-shadow-hover bg-card border transition-shadow duration-300';
	}

	return (
		<div className={cn('flex flex-col gap-2 rounded py-4', cardStyle, className)} {...props} />
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-title"
			className={cn('leading-none font-semibold', className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-content" className={cn('px-4', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex items-center px-4 [.border-t]:pt-6', className)}
			{...props}
		/>
	);
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction };
