import Modal from "./Modal";

export default class ListProjectsModal extends Modal {
  constructor() {
    super();
  }

  clear() {
    while (this.modal.firstChild) {
      this.modal.removeChild(this.modal.firstChild);
    }
  }

  appendProjectsList(projects) {
    this.ul = document.createElement("ul");

    this.modal.appendChild(this.ul);
    projects.forEach((p) => {
      const li = document.createElement("li");
      li.dataset.id = p.id;
      li.textContent = p.name;
      this.ul.appendChild(li);
    });
  }

  appendCloseButton() {
    this.modal.appendChild(this.button);
  }

  render(projects) {
    this.appendProjectsList(projects);
    this.appendCloseButton();
    return this.modal;
  }
}
