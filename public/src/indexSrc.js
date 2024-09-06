import * as components from './components/indexComponents.js';
import { data } from './data/data.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="src/styles.css">`;

        // Header Section
        this.shadowRoot.innerHTML += `<header-section></header-section>`;

        // Hero
        this.shadowRoot.innerHTML += `
            <section class="hero">
                <my-button text="PRE-ORDER BO6" type="big--call-2-action"></my-button>
                <my-button text="VISIT SITE" type="big"></my-button>
            </section>
        `;
        
        // News Section
        this.shadowRoot.innerHTML += `
            <section class="news-container">
                <h1>LATEST NEWS & ARTICLES</h1>
                <news-section></news-section>
                <ul class="news"></ul>
                <my-button text="VIEW ALL NEWS" type="big"></my-button>
            </section>
        `;

        const newsSection = this.shadowRoot.querySelector('.news');

        data.news.forEach(element => {
            const newsCard = document.createElement('news-card');
            newsCard.setAttribute('date', element.date);
            newsCard.setAttribute('title', element.title);
            newsCard.setAttribute('description', element.description);
            newsCard.setAttribute('link', element.link);
            newsCard.setAttribute('image', element.image);

            newsSection.appendChild(newsCard);
        });

        // Banner 1
        this.shadowRoot.innerHTML += `
            <my-banner 
                title="WE'RE HERE TO HELP!"
                text="Get answers to frequently asked questions, check server status, and engage with a support expert"
                txtbutton="VISIT SUPPORT"
                typebutton="big"
                class="support"
            </my-banner>
        `;

        // Community
        this.shadowRoot.innerHTML += `
            <section class="community">
                <div class="community-title">
                    <h1>COMMUNITY</h1>
                </div>
                <tweets-section></tweets-section>
            </section>
        `;

        // Banner 1
        this.shadowRoot.innerHTML += `
            <my-banner 
                title="HAVE FUN"
                text="Learn more about job opportunities"
                txtbutton="JOIN US"
                typebutton="big"
                class="careers"
            </my-banner>
        `;
    }
};

customElements.define('app-container', AppContainer);