export default function LiquidGlassSvg() {
	return (
		<svg className="svg-container">
			<defs>
				<filter id="displacementFilter" x="0%" y="0%" width="100%" height="100%">
					<feImage
						href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect rx='20' width='100%25' height='100%25' fill='%23000'/%3E%3Crect rx='20' width='100%25' height='100%25' fill='%23FFF' style='filter:blur(5px)'/%3E%3C/svg%3E"
						result="blurMask"
					/>

					<feImage
						href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect rx='20' width='100%25' height='100%25' fill='%23000' opacity='0.02' /%3E%3C/svg%3E"
						result="softBlur"
					/>

					<feImage
						href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect rx='20' width='100%25' height='100%25' fill='%23000'/%3E%3C/svg%3E"
						result="solidMask"
					/>

					<feImage
						href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradX'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%2300F'/%3E%3C/linearGradient%3E%3ClinearGradient id='gradY' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%230F0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect rx='20' width='100%25' height='100%25' fill='%237F7F7F'/%3E%3Crect rx='20' width='100%25' height='100%25' fill='%23000'/%3E%3Crect rx='20' width='100%25' height='100%25' fill='url(%23gradX)' style='mix-blend-mode:screen'/%3E%3Crect rx='20' width='100%25' height='100%25' fill='url(%23gradY)' style='mix-blend-mode:screen'/%3E%3Crect rx='20' width='100%25' height='100%25' fill='%237F7F7F' opacity='0.53' style='filter:blur(5px)'/%3E%3C/svg%3E"
						result="displacementMap"
					/>

					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale="-148"
						xChannelSelector="B"
						yChannelSelector="G"
						result="redChannel"
					/>
					<feColorMatrix
						in="redChannel"
						type="matrix"
						values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
						result="red"
					/>

					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale="-150"
						xChannelSelector="B"
						yChannelSelector="G"
						result="greenChannel"
					/>
					<feColorMatrix
						in="greenChannel"
						type="matrix"
						values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
						result="green"
					/>

					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale="-152"
						xChannelSelector="B"
						yChannelSelector="G"
						result="blueChannel"
					/>
					<feColorMatrix
						in="blueChannel"
						type="matrix"
						values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
						result="blue"
					/>

					<feBlend in="green" in2="blue" mode="screen" result="greenBlue" />
					<feBlend in="greenBlue" in2="red" mode="screen" result="rgbCombined" />

					<feGaussianBlur in="rgbCombined" stdDeviation="1" result="blurred" />
					<feBlend in="blurred" in2="softBlur" mode="screen" result="brightened" />
					<feBlend in="brightened" in2="blurMask" mode="multiply" result="masked" />
					<feComposite in="masked" in2="solidMask" operator="in" />
				</filter>
			</defs>
		</svg>
	);
}
