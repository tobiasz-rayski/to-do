import AddProjectModal from "../components/AddProjectModal";

export default class AppView {
  constructor() {
    this.docRoot = document.createElement("div");
    this.docRoot.id = "docRoot";
    this.modal = new AddProjectModal();
  }

  appendRoot() {
    document.body.appendChild(this.docRoot);
  }

  append(element) {
    this.docRoot.appendChild(element);
  }
}
