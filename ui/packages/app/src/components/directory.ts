export const component_map: Record<string, any> = {
	audio: () => import("./Audio"),
	button: () => import("./Button"),
	carousel: () => import("./Carousel"),
	carouselitem: () => import("./CarouselItem"),
	chatbot: () => import("./Chatbot"),
	checkbox: () => import("./Checkbox"),
	checkboxgroup: () => import("./CheckboxGroup"),
	column: () => import("./Column"),
	dataframe: () => import("./DataFrame"),
	dataset: () => import("./Dataset"),
	dropdown: () => import("./Dropdown"),
	file: () => import("./File"),
	statustracker: () => import("./StatusTracker"),
	highlightedtext: () => import("./HighlightedText"),
	html: () => import("./HTML"),
	image: () => import("./Image"),
	interpretation: () => import("./Interpretation"),
	json: () => import("./Json"),
	label: () => import("./Label"),
	number: () => import("./Number"),
	markdown: () => import("./Markdown"),
	radio: () => import("./Radio"),
	row: () => import("./Row"),
	slider: () => import("./Slider"),
	tabs: () => import("./Tabs"),
	tabitem: () => import("./TabItem"),
	textbox: () => import("./Textbox"),
	timeseries: () => import("./TimeSeries"),
	video: () => import("./Video"),
	model3d: () => import("./Model3D"),
	plot: () => import("./Plot"),
	variable: () => import("./Variable")
};
