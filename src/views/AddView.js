import Modal from "../components/Modal";

export default class AddView extends Modal {
  constructor() {
    super();
    this.addTask = document.createElement("form");
    this.addTask.id = "addNewTaskForm";

    this.taskName = document.createElement("input");
    this.taskName.type = "text";
    this.taskName.placeholder = "Enter task name";

    this.taskPriority = document.createElement("select");
    this.taskPriority.id = "prioritySelect";
    this.taskPriority.name = "prioritySelect";
    this.taskPriorityNone = document.createElement("option");
    this.taskPriorityNone.textContent = "Set Priority";
    this.taskPriorityNone.value = "0";
    this.taskPriorityLow = document.createElement("option");
    this.taskPriorityLow.textContent = "Low";
    this.taskPriorityLow.value = "1";
    this.taskPriorityMedium = document.createElement("option");
    this.taskPriorityMedium.textContent = "Medium";
    this.taskPriorityMedium.value = "2";
    this.taskPriorityHigh = document.createElement("option");
    this.taskPriorityHigh.textContent = "High";
    this.taskPriorityHigh.value = "3";

    this.taskPriority.appendChild(this.taskPriorityNone);
    this.taskPriority.appendChild(this.taskPriorityLow);
    this.taskPriority.appendChild(this.taskPriorityMedium);
    this.taskPriority.appendChild(this.taskPriorityHigh);

    this.addTask.appendChild(this.taskName);
    this.addTask.appendChild(this.taskPriority);

    this.modal.appendChild(this.addTask);
    // this.modal.classList.remove("hidden");
    // this.modal.classList.add("visible");
  }
}
