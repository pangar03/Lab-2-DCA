class NavLinks extends HTMLElement {
    static get observedAttributes(){
        return[ 'text', 'type'];
    }
    
    changeAttributeCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
            this.render();
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/navLinks/navLinks.css">
            <a href="#">
                <span>${this.text}</span>
            </a>
        `;

        if(this.type === 'arrowed'){
            const link = this.shadowRoot.querySelector('a');
            link.innerHTML += `<span class="arrow"></span>`;
        }
    }
};

customElements.define('nav-links', NavLinks);
export default NavLinks;