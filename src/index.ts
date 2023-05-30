import "./components/export"
import { dispatch } from "./store";
import { getprofile } from "./store/action";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async connectedCallback() {
    dispatch(await getprofile())
        this.render()
    }

    render() {
        const card = this.ownerDocument.createElement('app-forms');
        const clist = this.ownerDocument.createElement('candidate-list');
        this.shadowRoot?.appendChild(card);
        this.shadowRoot?.appendChild(clist);
        
    }
}

customElements.define('app-container', AppContainer)