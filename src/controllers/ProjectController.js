export default class ProjectController {
  constructor(projectModel, projectView) {
    this.projectModel = projectModel;
    this.projectView = projectView;
  }

  getProjectId() {
    this.projectModel.getId();
  }
}
