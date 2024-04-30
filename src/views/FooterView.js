import AddProjectIcon from "../components/AddProjectIcon";
import ListProjectsIcon from "../components/ListProjectsIcon";
import AddTaskIcon from "../components/AddTaskIcon";

export default class FooterView {
  constructor() {
    this.footer = document.createElement("nav");
    this.footer.id = "footer";
    this.addProjectIcon = new AddProjectIcon();
    this.listProjectsIcon = new ListProjectsIcon();
    this.addTaskIcon = new AddTaskIcon();
  }

  render() {
    this.footer.appendChild(this.addProjectIcon.render());
    this.footer.appendChild(this.listProjectsIcon.render());
    this.footer.appendChild(this.addTaskIcon.render());
    return this.footer;
  }
}
