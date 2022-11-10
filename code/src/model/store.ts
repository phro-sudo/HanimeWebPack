import {User} from "./user"
import { BehaviorSubject } from "rxjs";

export interface Model {
    readonly users: User[]
}

const initialState: Model = {
    users: []
}

const store = new BehaviorSubject<Model>(initialState);

export default store;