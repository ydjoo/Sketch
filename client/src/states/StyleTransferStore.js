import { action, makeObservable, observable} from 'mobx'


export class StyleTransferStore {
    resultURL = null;
    imageURL = null;

    constructor() {
        makeObservable(this, {
            resultURL: observable,
            imageURL: observable,
            setResultURL: action,
            setImageURL: action
        })
    }

    setResultURL(url) {
        this.resultURL = url
    }

    setImageURL(url) {
        this.imageURL = url
    }
}