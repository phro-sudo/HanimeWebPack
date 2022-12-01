import {Person} from "./person"
import { BehaviorSubject } from "rxjs";
import personService from "../person-service";

export interface Model {
    readonly persons: Person[]
    getPersionByID(id: number): Person
}

const initialState: Model = {
    persons: [],
    getPersionByID: function (id: number): Person {
        console.log(id)
        let selectedPerson : Person = null;
        this.persons.forEach((person: Person) => {
            if (person.id === id) {
                selectedPerson = person;
            }
        })
        console.log(selectedPerson)
        return selectedPerson;

    }
}

const store = new BehaviorSubject<Model>(initialState);

export default store;