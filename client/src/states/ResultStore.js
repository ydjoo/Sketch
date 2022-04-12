import { action, makeObservable, observable } from 'mobx';


class Result {
    result;

    constructor(result) {
        this.result = result;
    }
}


export class ResultStore {
    rootStore;

    result;
    
    constructor(root) {
        makeObservable(this,{
            result: observable
        })
        this.rootStore = root;
    }
}