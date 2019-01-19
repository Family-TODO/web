<template>
	<transition name="base-loading-animate">
		<div class="base-loading">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				height="30px"
				viewBox="0 0 24 30"
				style="enable-background:new 0 0 50 50;"
				xml:space="preserve"
			>
				<rect
					x="0"
					y="7.94352"
					width="4"
					height="15.113"
					fill="#fff"
				>
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect
					x="10"
					y="6.05648"
					width="4"
					height="18.887"
					fill="#333"
				>
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0.15s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0.15s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect
					x="20"
					y="10.0565"
					width="4"
					height="10.887"
					fill="#333"
				>
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0.3s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0.3s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</svg>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'BaseLoading'
}
</script>
