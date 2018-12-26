const range = document.createRange && document.createRange();

let htmlToFragment: (html: string) => DocumentFragment;

if (range && range.createContextualFragment) {
	let selected = false;

	htmlToFragment = html => {
		if (!selected) {
			range.selectNode(document.body);
			selected = true;
		}

		return range.createContextualFragment(html);
	};
} else {
	htmlToFragment = html => {
		let el = document.createElement('div');
		let df = document.createDocumentFragment();

		el.innerHTML = html;

		for (let child: Node | null; (child = el.firstChild); ) {
			df.appendChild(child);
		}

		return df;
	};
}

export { htmlToFragment };
