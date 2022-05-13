export const styleClasses = (
	styles: Record<string, any>,
	prefix: string = ""
): string => {
	let classes: Array<string> = [];
	let target_styles: Record<string, any> = {};
	if (prefix === "") {
		target_styles = styles;
	} else {
		for (const prop in styles) {
			if (prop.startsWith(prefix + "_")) {
				const propname = prop.substring(prop.indexOf("_") + 1);
				target_styles[propname] = styles[prop];
			}
		}
	}
	switch (target_styles.rounded) {
		case true:
			classes.push("!rounded-lg");
			break;
		case false:
			classes.push("!rounded-none");
			break;
	}
	switch (target_styles.text_color) {
		case "red":
			classes.push("!text-red-500", "dark:text-red-100");
			break;
		case "yellow":
			classes.push("!text-yellow-500", "dark:text-yellow-100");
			break;
		case "green":
			classes.push("!text-green-500", "dark:text-green-100");
			break;
		case "blue":
			classes.push("!text-blue-500", "dark:text-blue-100");
			break;
		case "purple":
			classes.push("!text-purple-500", "dark:text-purple-100");
			break;
		case "black":
			classes.push("!text-gray-700", "dark:text-gray-50");
			break;
	}
	switch (target_styles.bg_color) {
		case "red":
			classes.push(
				"!bg-red-100 !from-red-100 !to-red-200 !border-red-300",
				"dark:!bg-red-700 dark:!from-red-700 dark:!to-red-800 dark:!border-red-900"
			);
			break;
		case "yellow":
			classes.push(
				"!bg-yellow-100 !from-yellow-100 !to-yellow-200 !border-yellow-300",
				"dark:!bg-yellow-700 dark:!from-yellow-700 dark:!to-yellow-800 dark:!border-yellow-900"
			);
			break;
		case "green":
			classes.push(
				"!bg-green-100 !from-green-100 !to-green-200 !border-green-300",
				"dark:!bg-green-700 dark:!from-green-700 dark:!to-green-800 dark:!border-green-900"
			);
			break;
		case "blue":
			classes.push(
				"!bg-blue-100 !from-blue-100 !to-blue-200 !border-blue-300",
				"dark:!bg-blue-700 dark:!from-blue-700 dark:!to-blue-800 dark:!border-blue-900"
			);
			break;
		case "purple":
			classes.push(
				"!bg-purple-100 !from-purple-100 !to-purple-200 !border-purple-300",
				"dark:!bg-purple-700 dark:!from-purple-700 dark:!to-purple-800 dark:!border-purple-900"
			);
			break;
		case "black":
			classes.push(
				"!bg-gray-100 !from-gray-100 !to-gray-200 !border-gray-300",
				"dark:!bg-gray-700 dark:!from-gray-700 dark:!to-gray-800 dark:!border-gray-900"
			);
			break;
	}
	return " " + classes.join(" ");
};
