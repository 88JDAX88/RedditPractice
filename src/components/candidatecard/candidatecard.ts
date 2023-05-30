import { addObserver, appState } from "../../store";

export default class Canadidatelist extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
       if(this.shadowRoot)this.shadowRoot.innerHTML= ""

        appState.candidate.forEach((p) => {
            const pContainer = this.ownerDocument.createElement("article");
            const pTitle = this.ownerDocument.createElement("h3");
            pTitle.textContent = p.name
            const pTitle2 = this.ownerDocument.createElement("h3");
            pTitle2.textContent = p.id

            pContainer.appendChild(pTitle)
            pContainer.appendChild(pTitle2)

            this.shadowRoot?.appendChild(pContainer);
        });
      
    }
}

customElements.define('candidate-list', Canadidatelist)