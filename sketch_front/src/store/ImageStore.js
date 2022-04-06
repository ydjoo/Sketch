import { action, reaction, observable } from 'mobx';

const ImageStore = observable({
    previewImage: undefined,
    setPreviewImage: (preImage) => { this.previewImage = preImage }
})

export { ImageStore };