import { ImageStore } from "./ImageStore";

export class RootStore{
    imageStore;
    // 다른 Store들 여기에 계속 추가

    constructor() {
        this.imageStore = new ImageStore(this);
    }
}