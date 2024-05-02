import TaskView from "./TaskView";

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

  append(element) {
    this.main.appendChild(element);
  }

  render() {
    return this.main;
  }

  getElementId(element) {
    if (element.dataset.id) {
      return element.dataset.id;
    }
  }

  isTaskRemoveButton(element) {
    return element.classList.contains("taskRemove");
  }

  removeTaskElement(id) {
    const taskEl = document.querySelector(`[data-id="${id}"]`);
    if (taskEl && taskEl.classList.contains("task")) {
      taskEl.remove();
    }
  }
}
