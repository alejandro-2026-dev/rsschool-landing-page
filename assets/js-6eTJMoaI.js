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
//#region src/js/products.json
var products_default = /*#__PURE__*/ JSON.parse("[{\"name\":\"Irish coffee\",\"description\":\"Fragrant black coffee with Jameson Irish whiskey and whipped milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Kahlua coffee\",\"description\":\"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey raf\",\"description\":\"Espresso with frothed milk, cream and aromatic honey\",\"price\":\"5.50\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ice cappuccino\",\"description\":\"Cappuccino with soft thick foam in summer version with ice\",\"price\":\"5.00\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Espresso\",\"description\":\"Classic black coffee\",\"price\":\"4.50\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte\",\"description\":\"Espresso coffee with the addition of steamed milk and dense milk foam\",\"price\":\"5.50\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte macchiato\",\"description\":\"Espresso with frothed milk and chocolate\",\"price\":\"5.50\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Coffee with cognac\",\"description\":\"Fragrant black coffee with cognac and whipped cream\",\"price\":\"6.50\",\"category\":\"coffee\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Moroccan\",\"description\":\"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint\",\"price\":\"4.50\",\"category\":\"tea\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ginger\",\"description\":\"Original black tea with fresh ginger, lemon and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Cranberry\",\"description\":\"Invigorating black tea with cranberry and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Sea buckthorn\",\"description\":\"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon\",\"price\":\"5.50\",\"category\":\"tea\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Marble cheesecake\",\"description\":\"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam\",\"price\":\"3.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Red velvet\",\"description\":\"Layer cake with cream cheese frosting\",\"price\":\"4.00\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Cheesecakes\",\"description\":\"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar\",\"price\":\"4.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Creme brulee\",\"description\":\"Delicate creamy dessert in a caramel basket with wild berries\",\"price\":\"4.00\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Pancakes\",\"description\":\"Tender pancakes with strawberry jam and fresh strawberries\",\"price\":\"4.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey cake\",\"description\":\"Classic honey cake with delicate custard\",\"price\":\"4.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Chocolate cake\",\"description\":\"Cake with hot chocolate filling and nuts with dried apricots\",\"price\":\"5.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Black forest\",\"description\":\"A combination of thin sponge cake with cherry jam and light chocolate mousse\",\"price\":\"6.50\",\"category\":\"dessert\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]}]");
//#endregion
//#region src/js/cards-grid.js
var CardsGrid = class {
	constructor(modal) {
		this.modal = modal;
		this.category = "coffee";
		this.init();
	}
	init() {
		this.root = document.querySelector(".grid");
		this.grid = document.querySelector(".grid__container");
		this.template = document.getElementById("card-template");
		const offer = document.querySelector(".offer__tabs");
		const btnShowMore = document.getElementById("show-more");
		if (!this.grid || !this.template || !offer) return;
		const tabItems = offer.querySelectorAll(".tab-item");
		this.render();
		offer.addEventListener("click", (e) => {
			const currentBtn = e.target.closest(".tab-item");
			if (!currentBtn) return;
			const btnCategory = currentBtn.dataset.category;
			if ([
				"coffee",
				"tea",
				"dessert"
			].includes(btnCategory)) {
				this.category = btnCategory;
				this.render();
				tabItems.forEach((btn) => btn.classList.remove("tab-item--active"));
				currentBtn.classList.add("tab-item--active");
			}
		});
		btnShowMore.addEventListener("click", () => {
			this.root.classList.add("grid--expanded");
		});
	}
	render() {
		this.grid.textContent = "";
		const filtered = products_default.filter((product) => product.category === this.category);
		filtered.length > 4 ? this.root.classList.remove("grid--expanded") : this.root.classList.add("grid--expanded");
		filtered.forEach((product, index) => {
			const card = this.template.content.cloneNode(true);
			const image = card.querySelector(".card__image");
			image.src = `images/${this.category}-${index + 1}.jpg`;
			image.alt = product.name;
			card.querySelector(".card__name").textContent = product.name;
			card.querySelector(".card__text").textContent = product.description;
			card.querySelector(".card__price").textContent = `$${Number(product.price).toFixed(2)}`;
			card.firstElementChild.addEventListener("click", () => this.modal.openModal(product, image.src));
			this.grid.append(card);
		});
	}
};
//#endregion
//#region src/js/burger.js
var Burger = class {
	constructor() {
		this.init();
	}
	init() {
		this.burger = document.querySelector(".header__burger");
		this.menu = document.querySelector(".header__panel");
		if (!this.burger || !this.menu) return;
		this.isOpen = false;
		this.burger.addEventListener("click", () => {
			if (this.isOpen) this.close();
			else this.open();
		});
		this.menu.addEventListener("click", (e) => {
			if (e.target.closest(".header__link")) this.close();
		});
		document.addEventListener("keyup", (e) => {
			if (e.key === "Escape") this.close();
		});
		window.matchMedia("(min-width: 769px)").addEventListener("change", this.close);
	}
	open = () => {
		if (this.isOpen === true) return;
		this.burger.classList.add("on");
		this.menu.classList.add("on");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		document.body.classList.add("no-scroll");
		this.isOpen = true;
	};
	close = () => {
		if (this.isOpen === false) return;
		this.burger.classList.remove("on");
		this.menu.classList.remove("on");
		document.body.classList.remove("no-scroll");
		this.isOpen = false;
	};
};
//#endregion
//#region src/js/slider.js
var Slider = class {
	constructor() {
		this.init();
	}
	init() {
		this.position = 0;
		this.controls = document.querySelectorAll(".slider__control");
		this.qty = this.controls.length;
		this.row = document.querySelector(".slider__row");
		if (!this.row) return;
		const prevBtn = document.querySelector(".slider__button--prev");
		const nextBtn = document.querySelector(".slider__button--next");
		prevBtn.addEventListener("click", () => this.goTo(this.position - 1));
		nextBtn.addEventListener("click", () => this.goTo(this.position + 1));
		this.controls.forEach((control, i) => control.addEventListener("click", () => this.goTo(i)));
	}
	goTo(target) {
		this.position = (target + this.qty) % this.qty;
		this.row.style.transform = `translateX(${-this.position * 100}%)`;
		this.updateControlsUI();
	}
	updateControlsUI() {
		this.controls.forEach((control, i) => {
			control.classList.toggle("slider__control--active", i === this.position);
		});
	}
};
//#endregion
//#region src/js/modal.js
var Modal = class {
	constructor() {
		this.modal = null;
		this.product = null;
		this.imageSrc = null;
		this.size = 0;
		this.adds = /* @__PURE__ */ new Set();
		this.initModal();
	}
	initModal() {
		this.modal = document.querySelector(".modal");
		if (!this.modal) return;
		this.modal.addEventListener("click", (e) => {
			if (e.target === this.modal || e.target.closest(".modal__button")) this.closeModal();
		});
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") this.closeModal();
		});
		const sizeContainer = this.modal.querySelector(".modal__size--tabs");
		sizeContainer.addEventListener("click", (e) => {
			const targetTab = e.target.closest(".tab-item");
			if (targetTab) {
				this.size = Number(targetTab.dataset.index);
				this.renderPrice();
				targetTab.classList.add("tab-item--active");
				sizeContainer.querySelectorAll(".tab-item").forEach((item) => {
					if (item !== targetTab) item.classList.remove("tab-item--active");
				});
			}
		});
		this.modal.querySelector(".modal__adds--tabs").addEventListener("click", (e) => {
			const targetTab = e.target.closest(".tab-item");
			if (targetTab) {
				const numIndex = Number(targetTab.dataset.index);
				if (this.adds.has(numIndex)) this.adds.delete(numIndex);
				else this.adds.add(numIndex);
				this.renderPrice();
				targetTab.classList.toggle("tab-item--active");
			}
		});
	}
	openModal(product, imageSrc) {
		this.product = product;
		this.imageSrc = imageSrc;
		this.size = 0;
		this.adds.clear();
		this.fillModal();
		this.modal.classList.remove("hidden");
		document.body.classList.add("no-scroll");
	}
	closeModal() {
		this.modal.classList.add("hidden");
		document.body.classList.remove("no-scroll");
	}
	fillModal() {
		const template = document.getElementById("tab-template");
		const image = this.modal.querySelector(".modal__image");
		image.src = this.imageSrc;
		image.alt = this.product.name;
		this.modal.querySelector(".modal__name").textContent = this.product.name;
		this.modal.querySelector(".modal__description").textContent = this.product.description;
		this.modal.querySelector(".modal__price").textContent = `$${Number(this.product.price).toFixed(2)}`;
		const sizeTabs = this.modal.querySelector(".modal__size--tabs");
		sizeTabs.textContent = "";
		Object.entries(this.product.sizes).forEach(([key, value], index) => {
			const tab = this.createTab(template, key.toUpperCase(), value.size, index);
			if (index === 0) tab.classList.add("tab-item--active");
			sizeTabs.append(tab);
		});
		const addsTabs = this.modal.querySelector(".modal__adds--tabs");
		addsTabs.textContent = "";
		this.product.additives.forEach((additive, index) => {
			addsTabs.append(this.createTab(template, index + 1, additive.name, index));
		});
	}
	createTab(template, icon, text, index) {
		const tab = template.content.cloneNode(true).firstElementChild;
		tab.querySelector(".tab-item__icon").textContent = icon;
		tab.querySelector(".tab-item__text").textContent = text;
		tab.dataset.index = index;
		return tab;
	}
	renderPrice() {
		const sizes = [
			"s",
			"m",
			"l"
		];
		const initPrice = Number(this.product.price);
		const addForSize = Number(this.product.sizes[sizes[this.size]]["add-price"]);
		const addForAdds = this.product.additives.filter((_, ind) => this.adds.has(ind)).reduce((acc, item) => {
			return acc + Number(item["add-price"]);
		}, 0);
		const total = initPrice + addForSize + addForAdds;
		const element = document.querySelector(".modal__price");
		element.innerText = `$${total.toFixed(2)}`;
	}
};
//#endregion
//#region src/js/index.js
setSwitchDarkMode();
new CardsGrid(new Modal());
new Burger();
new Slider();
function setSwitchDarkMode() {
	const htmlElement = document.querySelector("html");
	const switchElement = document.querySelector(".header__theme-switch");
	htmlElement.dataset.theme = localStorage.getItem("mode") ?? "light";
	switchElement.addEventListener("click", () => {
		const newMode = localStorage.getItem("mode") === "dark" ? "light" : "dark";
		htmlElement.dataset.theme = newMode;
		localStorage.setItem("mode", newMode);
	});
}
//#endregion

//# sourceMappingURL=js-6eTJMoaI.js.map