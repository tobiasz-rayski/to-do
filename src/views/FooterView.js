import AddProjectIcon from "../components/AddProjectIcon";
import ListProjectsIcon from "../components/ListProjectsIcon";

export default class FooterView {
  constructor() {
    this.footer = document.createElement("nav");
    this.footer.id = "footer";
    this.addProjectIcon = new AddProjectIcon();
    this.listProjectsIcon = new ListProjectsIcon();
  }

  render() {
    this.footer.appendChild(this.addProjectIcon.render());
    this.footer.appendChild(this.listProjectsIcon.render());
    return this.footer;
  }
}
