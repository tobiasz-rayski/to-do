import Modal from "./Modal";

export default class AddProjectModal extends Modal {
  constructor() {
    super();
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.id = "addNewProjectInput";
  }

  appendCloseButton() {
    this.modal.appendChild(this.button);
  }

  appendInput() {
    this.modal.appendChild(this.input);
  }

  render() {
    this.appendInput();
    this.appendCloseButton();
    return this.modal;
  }
}
