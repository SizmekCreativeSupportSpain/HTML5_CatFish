define({
	"format": "expandableBanner",
	"defaultBanner": "Main_Banner",
	"defaultPanel": "contracted",
	"polite": "instant",
	"banners": [
		{
			"name": "Main_Banner",
			"asset": "index.html",
			"width": "1",
			"height": "1",
			"defaultImage": "images/1x1.jpg"
		}
	],
	"panels": [
		{
			"name": "contracted",
			"asset": "panels/contracted/index.html",
			"width": "320",
			"height": "50",
			"autoCollapse": "never",
			"delayedExpansion": "false",
			"positionType": "pageRelativePercentage",
			"x": "50",
			"y": "100"
		},
		{
			"name": "expanded",
			"asset": "panels/expanded/index.html",
			"width": "0",
			"height": "0",
			"autoCollapse": "never",
			"delayedExpansion": "false",
			"positionType": "pageRelativePercentage",
			"x": "0",
			"y": "0"
		}
	]
});
