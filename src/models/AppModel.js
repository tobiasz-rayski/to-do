import ProjectModel from "./ProjectModel";

export default class AppModel {
  constructor() {
    this.projects = [];
    this.initDefaultProject();
  }

  initDefaultProject() {
    this.addNewProject("Inbox");
  }

  addNewProject(name) {
    const newProject = new ProjectModel(name);
    this.projects.push(newProject);
  }
}
