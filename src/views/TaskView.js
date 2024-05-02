export default class TaskView {
  constructor() {
    this.task = document.createElement("article");
    this.task.classList.add("task");
    this.header = document.createElement("header");
    this.taskName = document.createElement("h3");
    this.taskPriority = document.createElement("span");
    this.taskIsDone = document.createElement("input");
    this.taskIsDone.id = "check";
    this.taskIsDone.type = "checkbox";
    this.taskRemove = document.createElement("button");
    this.taskRemove.id = "taskRemove";
    this.taskRemove.classList.add("button");
  }

  render(taskName, taskPriority, id) {
    this.updateTaskName(taskName);
    this.updateTaskPriority(taskPriority);
    this.task.appendChild(this.header);
    this.task.appendChild(this.taskPriority);
    this.task.appendChild(this.taskIsDone);
    this.header.appendChild(this.taskName);
    this.task.dataset.id = id;
    return this.task;
  }

  updateTaskName(taskName) {
    this.taskName.textContent = taskName;
  }

  updateTaskPriority(taskPriority) {
    const level = ["None", "Low", "Medium", "High"];
    this.taskPriority.textContent = level[taskPriority];
  }
}
