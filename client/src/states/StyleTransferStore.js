import { action, makeObservable, observable} from 'mobx'


export class StyleTransferStore {
    rootStore;

    resultURL
    imageURL

    constructor(root) {
        makeObservable(this, {
            resultURL: observable,
            imageURL: observable,
            setResultURL: action,
            setImageURL: action
        })
        this.rootStore = root 
    }

    setResultURL(url) {
        this.resultURL = url
    }

    setImageURL(url) {
        this.imageURL = url
    }
}