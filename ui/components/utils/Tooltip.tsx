interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

function Tooltip({ text, children }: TooltipProps) {
	return (
		<div className='tooltipContainer'>
			{children}
			<span className='tooltipText'>{text}</span>
		</div>
	);
}

export default Tooltip;
