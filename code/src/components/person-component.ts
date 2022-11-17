import { html, render } from "lit-html"

const template = html`
    <div>Person: Max Mustermann</div>
`

class PersonComponent extends HTMLElement {
    static get observedAttributes() {
        return ["id"]
    }
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    attributeChangedCallback(name: string, oldValue: string, value: string) {
        console.log("TODO: display person", value)
    }
    connectedCallback() {
        console.log("person connected")
        this.render()
    }
    private render() {
        render(template, this.shadowRoot)
    }


}

customElements.define("person-component", PersonComponent)
