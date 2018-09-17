export default function($createElement) {
	return $createElement(
		'VSlider',
		{
			class: 'mx-2 my-1',
			props: {
				disabled: this.disabled,
				hideDetails: true,
				max: Math.round(this.maxScaling * 1000),
				min: Math.round(this.minScaling * 1000),
				value: Math.round(this.scaling * 1000),
			},
			on: {
				input: value => {
					this.scaling = value / 1000;
				},
			},
		},
	);
}