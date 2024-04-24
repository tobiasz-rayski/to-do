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
}
