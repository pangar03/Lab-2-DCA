class NewsCard extends HTMLElement {
    static get observedAttributes() {
        return ['date', 'title', 'description', 'image', 'link'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue){
            this[propName] = newValue;
            this.render();
        }
    }

    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/newsCard/newsCard.css">
            <div class="news-card">
                <img src="${this.image}" alt="${this.title}">
                <div class="news-info">
                    <h3>${this.date}</h3>
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                    <a href="${this.link}" target="_blank">READ MORE</a>
                </div>
            </div>
        `;
    }
};

customElements.define('news-card', NewsCard);
export default NewsCard;