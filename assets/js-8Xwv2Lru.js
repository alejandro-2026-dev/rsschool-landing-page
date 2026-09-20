//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/js/data.js
var coffee = [
	{
		id: 1,
		name: "Irish coffee",
		description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
		price: 7
	},
	{
		id: 2,
		name: "Kahlua coffee",
		description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
		price: 7
	},
	{
		id: 3,
		name: "Honey raf",
		description: "Espresso with frothed milk, cream and aromatic honey",
		price: 5.5
	},
	{
		id: 4,
		name: "Ice cappuccino",
		description: "Cappuccino with soft thick foam in summer version with ice",
		price: 5
	},
	{
		id: 5,
		name: "Espresso",
		description: "Classic black coffee",
		price: 4.5
	},
	{
		id: 6,
		name: "Latte",
		description: "Espresso coffee with the addition of steamed milk and dense milk foam",
		price: 5.5
	},
	{
		id: 7,
		name: "Latte macchiato",
		description: "Espresso with frothed milk and chocolate",
		price: 5.5
	},
	{
		id: 8,
		name: "Coffee with cognac",
		description: "Fragrant black coffee with cognac and whipped cream",
		price: 6.5
	}
];
//#endregion
//#region src/js/fill-grid.js
function fillGrid() {
	const grid = document.querySelector(".grid__container");
	const template = document.getElementById("card-template");
	if (!grid || !template) return;
	grid.textContent = "";
	coffee.forEach((product) => {
		const card = template.content.cloneNode(true);
		const image = card.querySelector(".card__image");
		image.src = `images/coffee-${product.id}.jpg`;
		image.alt = product.name;
		card.querySelector(".card__name").textContent = product.name;
		card.querySelector(".card__text").textContent = product.description;
		card.querySelector(".card__price").textContent = `$${product.price.toFixed(2)}`;
		grid.append(card);
	});
}
//#endregion
//#region src/js/switch.js
function setSwitchDarkMode() {
	const htmlElement = document.querySelector("html");
	document.querySelector(".header__theme-switch").addEventListener("click", () => {
		const newMode = localStorage.getItem("mode") === "dark" ? "light" : "dark";
		htmlElement.dataset.theme = newMode;
		localStorage.setItem("mode", newMode);
	});
}
//#endregion
//#region src/js/index.js
setSwitchDarkMode();
fillGrid();
//#endregion

//# sourceMappingURL=js-8Xwv2Lru.js.map