class TweetCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {

    }
}

customElements.define('tweet-card', TweetCard);
export default TweetCard;