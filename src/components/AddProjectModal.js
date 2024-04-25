import Modal from "./Modal";

export default class AddProjectModal extends Modal {
  constructor() {
    super();
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.id = "addNewProjectInput";
  }

  render() {
    this.modal.appendChild(this.input);
    this.modal.appendChild(this.button);
    return this.modal;
  }
}
