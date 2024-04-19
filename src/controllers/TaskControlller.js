export default class TaskController {
  constructor(docRoot, taskModel, taskView) {
    this.docRoot = docRoot;
    this.taskModel = taskModel;
    this.taskView = taskView;
  }

  init() {
    this.docRoot.appendChild(this.taskView.render());
  }
}
