import AddProjectModal from "../components/AddProjectModal";
import ListProjectsModal from "../components/ListProjectsModal";

export default class AppView {
  constructor() {
    this.docRoot = document.createElement("div");
    this.docRoot.id = "docRoot";
    this.listProjectsModal = new ListProjectsModal();
    this.addProjectModal = new AddProjectModal();
  }

  appendRoot() {
    document.body.appendChild(this.docRoot);
  }

  append(element) {
    this.docRoot.appendChild(element);
  }
}
