import Modal from "./Modal";

export default class AddProjectModal extends Modal {
  constructor() {
    super();
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

  show() {
    this.modal.classList.remove("hidden", "visible");
    this.modal.classList.add("visible");
  }

  hide() {
    this.modal.classList.remove("hidden", "visible");
    this.modal.classList.add("hidden");
  }
}
