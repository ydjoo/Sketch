import { StyleTransferStore } from "./StyleTransferStore";


export class RootStore {
    styletransferStore

    constructor() {
        this.styletransferStore = new StyleTransferStore(this)
    }
}