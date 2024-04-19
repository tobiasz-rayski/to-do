export default class TaskController {
  constructor(docRoot, taskModel, taskView) {
    this.taskModel = taskModel;
    this.taskView = taskView;
    this.docRoot = docRoot;
  }

  init() {
    this.docRoot.appendChild(this.taskView.render());
  }
}
