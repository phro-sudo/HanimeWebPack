import {html, render} from "lit-html"

import store from "../model/store"
import { Person } from "../model/person"
import personService from "../person-service"
import { distinctUntilChanged, map } from 'rxjs/operators';


const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Name</th><th>Age</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (person: Person) => html`
    <td>${person.name}</td><td>${person.age}</td>
`
class PersonTableComponent extends HTMLElement {
    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
//    "Name", "B", "W", "H", "Age", "Birthdate", image_url, height, weight)
    async connectedCallback() {
        store
        .pipe(
            map(model => model.persons),
            distinctUntilChanged()
            ).subscribe(person => this.render(person))
        personService.fetchPersons()
    }

    private render(persons: Person[]) {
        render(tableTemplate, this.root)
        const body = this.root.querySelector("tbody")
        persons.forEach(person => {
            const row = body.insertRow()
            row.onclick = () => {
                const event = new CustomEvent("person-selected", {detail: {person}})
                this.dispatchEvent(event)
            }
            render(rowTemplate(person), row)
        })
    }
}
customElements.define("person-table-component", PersonTableComponent)