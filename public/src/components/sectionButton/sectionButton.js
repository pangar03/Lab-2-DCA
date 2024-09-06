class SectionButton extends HTMLElement {
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