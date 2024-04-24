import ProjectModel from "./ProjectModel";

export default class AppModel {
  constructor() {
    this.projects = [];
    this.activeProject = null;
    this.initDefaultProject();
  }

  initDefaultProject() {
    const defaultProject = this.addNewProject("Inbox");
    this.setActiveProject(defaultProject.id);
  }

  addNewProject(name) {
    const newProject = new ProjectModel(name);
    this.projects.push(newProject);
    return newProject;
  }

  getActiveProjectName() {
    return this.activeProject ? this.activeProject.name : "No active project";
  }

  getActiveProject() {
    return this.activeProject || null;
  }

  setActiveProject(id) {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      console.error("No project found with the given ID.");
      this.activeProject = null;
    } else {
      this.activeProject = project;
    }
  }

  getProjects() {
    return this.projects;
  }
}
