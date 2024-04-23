import HamburgerIcon from "../components/HamburgerIcon";

export default class MenuView {
  constructor() {
    this.header = document.createElement("header");
    this.menu = document.createElement("nav");
    this.menu.id = "menu";
    this.hamburgerIcon = new HamburgerIcon();
    this.activeProject = document.createElement("h2");
  }

  render() {
    this.header.appendChild(this.menu);
    this.menu.appendChild(this.hamburgerIcon.render());
    this.menu.appendChild(this.activeProject);
    return this.header;
  }

  renderActiveProject(activeProjectName) {
    this.activeProject.textContent = activeProjectName;
  }
}
