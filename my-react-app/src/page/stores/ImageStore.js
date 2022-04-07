import { action, makeObservable, observable } from "mobx";

export class ImageFlow {
    name;
    blob;
    inputURL;
    loading;
    outputURL;

    constructor(name, inputURL, loading, outputURL) {
        this.name = name
        this.inputURL = inputURL;
        this.loading = loading;
        this.outputURL = outputURL;
    }
}

export class ImageStore {
    rootStore;

    image = null;

    constructor(root) {
        makeObservable(this, {
            image : observable,
            createInputURL : action,
            createOutputURL : action,
            changeLoading : action
        })

        this.rootStore = root;
        // root.어쩌구저쩌구 형태로 다른 store 내용을 쓸 수 있음

        this.image = new ImageFlow('', '', false, '');
    }

    createInputURL(blob) {
        this.image.inputURL = URL.createObjectURL(blob);
    }

    createOutputURL(blob) {
        this.image.outputURL = URL.createObjectURL(blob);
    }

    changeLoading() {
        this.image.loading = !this.image.loading;
    }
}