export default class ProjectView {
  constructor() {
    this.main = document.createElement("main");
    this.main.id = "projectView";
  }

  clear() {
    while (this.main.firstChild) {
      this.main.removeChild(this.main.firstChild);
    }
  }

  render(tasks) {
    this.clear();
    tasks.forEach((task) => {
      this.main.appendChild(
        new TaskView().render(task.taskName, task.taskPriority),
      );
    });
    return this.main;
  }
}
