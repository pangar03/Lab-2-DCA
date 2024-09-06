import { default as NavLinks } from "../navLinks/navLinks.js";
import { default as Button } from "../button/button.js";

class HeaderSection extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/headerSection/headerSection.css">
            <nav>
                <div>
                    <img href="https://cdn.brandfetch.io/idkpc89MpE/theme/dark/logo.svg?k=bfHSJFAPEG"></img>
                    <nav-links text="GAMES" type="not-arrowed"></nav-links>
                    <nav-links text="ABOUT" type="arrowed"></nav-links>
                    <nav-links text="CAREERS" type="arrowed"></nav-links>
                    <nav-links text="SUPPORT" type="arrowed"></nav-links>
                </div>
                <div>
                    <my-button text="SIGN UP" type="call-2-action"></my-button>
                    <nav-links text="Login" type="not-arrowed"></nav-links>
                </div>
            </nav>
        `;
    }
}

customElements.define('header-section', HeaderSection);
export default HeaderSection;