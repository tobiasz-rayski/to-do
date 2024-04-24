export default class Modal {
  constructor() {
    this.modal = document.createElement("section");
    this.modal.classList.add("modal", "hidden");

    this.button = document.createElement("button");
    this.button.classList.add("button-close", "hidden");
    this.button.textContent = "⨉";

    this.isActive = false;
  }

  toggleState() {
    this.isActive = !this.isActive;
  }

  show() {
    this.modal.classList.remove("hidden", "visible");
    this.modal.classList.add("visible");
  }

  hide() {
    this.modal.classList.remove("hidden", "visible");
    this.modal.classList.add("hidden");
  }
}
