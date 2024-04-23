export default class ProjectController {
  constructor(projectModel, projectView) {
    this.projectModel = projectModel;
    this.projectView = projectView;
  }

  getProjectId() {
    return this.projectModel.getId();
  }

  getProjectName() {
    return this.projectModel.getName();
  }
}
