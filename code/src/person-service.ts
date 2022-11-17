import { Person } from "./model/person"
import store from "./model/store"
import produce from "immer"

const url = "https://jsonplaceholder.typicode.com/users"

class PersonsService {
    async fetchPersons() {
        const response = await fetch(url)
        let model = store.getValue()

        let persons = await response.json()

        let nextState = produce(store.getValue(), (draft: { persons: any }) => {
            draft.persons = persons;
        })
        
        store.next(nextState);
    }
}

const personService = new PersonsService()
export default personService