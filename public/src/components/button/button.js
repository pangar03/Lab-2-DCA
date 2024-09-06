class Button extends HTMLElement {
    static get observedAttributes() {
        return ['text', 'type'];
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
            <link rel="stylesheet" href="src/components/button/button.css">
            <button>
                <span>${this.text}</span>
            </button>
        `;

        const button = this.shadowRoot.querySelector('button');
        button.classList.add(this.type);
    }
}

customElements.define('my-button', Button);
export default Button;