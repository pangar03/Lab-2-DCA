import { default as SectionButton } from "../sectionButton/sectionButton.js";

class NewsSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/newsSection/newsSection.css">
            <section>
                <section-button text="ALL NEWS"></section-button>
                <section-button text="ACTIVISION"></section-button>
                <section-button text="CALL OF DUTY"></section-button>
                <section-button text="TONY HAWKS PRO SKATER"></section-button>
                <section-button text="CRASH BANDICOOT"></section-button>
            </section>
        `;
    }
}

customElements.define('news-section', NewsSection);
export default NewsSection;