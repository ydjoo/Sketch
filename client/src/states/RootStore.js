import { ResultStore } from "./ResultStore";

export class RootStore{
    resultStore;

    constructor() {
        this.resultStore = new ResultStore(this);
    }
}