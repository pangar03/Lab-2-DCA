class Banner extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'text', 'txtbutton', 'typebutton', 'class'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/banner/banner.css">
            <div class="banner" id="${this.class}">
                <div class="banner-info">
                    <h1>${this.title}</h1>
                    <p>${this.text}</p>
                    <my-button text="${this.txtbutton}" type="${this.typebutton}"></my-button>
                </div>
            </div>
        `;
    }
}

customElements.define('my-banner', Banner);
export default Banner;