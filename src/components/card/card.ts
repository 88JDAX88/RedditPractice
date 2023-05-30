import { dispatch } from "../../store";
import { Saveprofile } from "../../store/action";
import { candidate } from "../../types/candidate";
import styles from  "../card/card.css"

const Userinputs: candidate = {
    name : "",
    id: "",

}

export default class card extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML='';

        const container = this.ownerDocument.createElement("section")
        container.className = "container"

        const lname = this.ownerDocument.createElement("label")
        lname.textContent ="Escribe tu nombre"

        const name = this.ownerDocument.createElement("input")
        name.className = "name"
        name.addEventListener("change", (e: any)=> {
            Userinputs.name = e.target.value
        } )

        const lid = this.ownerDocument.createElement("label")
        lid.textContent ="Escribe tu contraseña"

        const id = this.ownerDocument.createElement("input")
        id.className = "name"
        id.type= "number"
        id.addEventListener("change", (e: any)=> {
            Userinputs.id = e.target.value
        } )

        const btn = this.ownerDocument.createElement("button")
        btn.className = "button"
        btn.textContent ="Submit the product" 
        btn.addEventListener("click", async ()=>{
            console.log(Userinputs)
            dispatch(await Saveprofile(Userinputs))
        });

        container.appendChild(lname)
        container.appendChild(name)
        container.appendChild(lid)
        container.appendChild(id)
        container.appendChild(btn)

        this.shadowRoot?.appendChild(container)

        const css = this.ownerDocument.createElement("style");     
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}
customElements.define("app-forms", card);