export default class AppView {
  constructor() {
    this.docRoot = document.createElement("div");
    this.docRoot.id = "docRoot";
  }

  appendRoot() {
    document.body.appendChild(this.docRoot);
  }

  appendMenuView(element) {
    this.docRoot.appendChild(element);
  }

  appendProjectView(element) {
    this.docRoot.appendChild(element);
  }

  appendFooterView(element) {
    this.docRoot.appendChild(element);
  }
}
