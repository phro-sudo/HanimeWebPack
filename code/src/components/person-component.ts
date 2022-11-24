import { html, render } from "lit-html"
import { Person } from "../model/person"
import store from "../model/store"

const detailsTemplate = html`
<img src="">
<table class="w3-table w3-striped w3-bordered">
<thead>
    <tr>
    <th>Name</th><th>Age</th><th>Birthdate</th><th>Height</th><th>Weight</th><th>B</th><th>W</th><th>H</th>
    </tr>
</thead>
<tbody></tbody>
</table>
`
const rowTemplate = (person: Person) => html`
    <td>${person.name}</td><td>${person.age}</td><td>${person.birthdate}</td><td>${person.height}</td><td>${person.weight}</td><td>${person.b}</td><td>${person.w}</td><td>${person.h}</td>
`

class PersonComponent extends HTMLElement {
    private root: ShadowRoot
    private personId: number
    static get observedAttributes() {
        return ["personid"]
    }
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }
    attributeChangedCallback(name: string, oldValue: string, value: string) {
        console.log(this.personId, " hure ", value)
        const person = store.getValue().getPersionByID(+value)
        console.log(person)
        const img = this.root.querySelector("img")
        img.src = person.image_url
        const body = this.root.querySelector("tbody")
        const row = body.insertRow()
        render(rowTemplate(person), row)
    }
    connectedCallback() {
        console.log("person connected")
        this.render()
    }
    private render() {
        render(detailsTemplate, this.root)
    }


}

customElements.define("person-component", PersonComponent)
