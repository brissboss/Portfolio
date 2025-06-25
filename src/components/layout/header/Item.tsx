interface ItemProps {
	children: React.ReactNode;
	selected?: boolean;
	className?: string;
}

export default function Item({ children, selected, className }: ItemProps) {
	return (
		<li
			className={`${className} flex cursor-pointer items-center gap-1.5 rounded-xl py-1 pr-2 pl-2 transition sm:pr-3 ${selected ? 'bg-neutral-300/30' : ''}`}
		>
			{children}{' '}
		</li>
	);
}
