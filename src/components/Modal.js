export default class Modal {
  constructor() {
    this.modal = document.createElement("section");
    this.modal.classList.add("modal hidden");
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay hidden");
    this.button = document.createElement("button");
  }
}
