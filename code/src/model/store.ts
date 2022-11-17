import {Person} from "./person"
import { BehaviorSubject } from "rxjs";

export interface Model {
    readonly persons: Person[]
}

const initialState: Model = {
    persons: []
}

const store = new BehaviorSubject<Model>(initialState);

export default store;