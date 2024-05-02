export default class ProjectController {
  constructor(projectModel, projectView) {
    this.projectModel = projectModel;
    this.projectView = projectView;
    init()
  }

  init() {
    this.handleTaskRemoveOnClick((e) => )
  }

  getProjectId() {
    return this.projectModel.getId();
  }

  getProjectName() {
    return this.projectModel.getName();
  }

  removeTask() {
    const taskElId = this.projectView.getElementId()
  }

}
