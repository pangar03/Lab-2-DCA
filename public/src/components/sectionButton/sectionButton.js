class SectionButton extends HTMLElement {
    static get observedAttributes() {
        return ['text'];
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
            <link rel="stylesheet" href="src/components/sectionButton/sectionButton.css">
            <button>
                <span>${this.text}</span>
            </button>
        `;
    }
}

customElements.define('section-button', SectionButton);
export default SectionButton;