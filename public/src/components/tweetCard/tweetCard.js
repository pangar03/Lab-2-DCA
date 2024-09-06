class TweetCard extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'userhandle'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
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
            <link rel="stylesheet" href="src/components/tweetCard/tweetCard.css">
            <div class="tweet-card" style="background-image: url(${this.image})">
                <h2>${this.userhandle}</h2>
                <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
            </div>
            <script src="https://kit.fontawesome.com/8fd88ba57c.js" crossorigin="anonymous"></script>
        `;    
    }
}

customElements.define('tweet-card', TweetCard);
export default TweetCard;