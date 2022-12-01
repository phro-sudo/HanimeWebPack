import {html, render} from "lit-html"
import "./person-table-component"
import "./person-component"

const appComponentTemplate = html`
    <person-table-component id="table"></person-table-component>
    <person-component id="person"></person-component>
`

class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback() {
        console.log("connected")
        this.render()

    }
    render() {
        render(appComponentTemplate, this.shadowRoot)
        const personTableComponent = this.shadowRoot.getElementById("table")
        const personComponent: HTMLElement = this.shadowRoot.querySelector("person-component")
        personTableComponent.addEventListener("person-selected", (e: CustomEvent) => {
            const person = e.detail.person
            personComponent.setAttribute("personId", person.id)
            personTableComponent.style.display = "none"
            personComponent.style.display = "block"
        })
    }
}

customElements.define("app-component", AppComponent)