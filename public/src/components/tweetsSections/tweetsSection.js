import { default as TweetCard } from '../tweetCard/tweetCard.js';
import { data } from '../../data/data.js';

class TweetsSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/tweetsSections/tweetsSection.css">
            <div class="tweets-section">
            </div>
        `;

        const tweetsSection = this.shadowRoot.querySelector('.tweets-section');


        data.tweets.forEach(element => {
            const tweetCard = document.createElement('tweet-card');
            tweetCard.setAttribute('image', element.image);
            tweetCard.setAttribute('userhandle', element.tag);

            console.log(tweetCard);
            tweetsSection.appendChild(tweetCard);
        });
    }
}

customElements.define('tweets-section', TweetsSection);
export default TweetsSection;