import AddProjectModal from "../components/AddProjectModal";
import ListProjectsModal from "../components/ListProjectsModal";

export default class AppView {
  constructor() {
    this.docRoot = document.createElement("div");
    this.docRoot.id = "docRoot";
    this.listProjectsModal = new ListProjectsModal();
    this.addProjectModal = new AddProjectModal();
    this.modals = this.getModals();
  }

  appendRoot() {
    document.body.appendChild(this.docRoot);
  }

  append(element) {
    this.docRoot.appendChild(element);
  }

  documentOnClick(handler) {
    document.addEventListener("click", handler);
  }

  getModalsDOM() {
    return document.querySelectorAll(".modal");
  }

  getModals() {
    return [this.listProjectsModal, this.addProjectModal];
  }

  hideModals() {
    this.modals.forEach((modal) => {
      modal.setInactive();
      modal.hide();
    });
  }
}
