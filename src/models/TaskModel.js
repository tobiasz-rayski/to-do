import { v4 as uuidv4 } from "uuid";

export default class TaskModel {
  constructor(name, priority = 0) {
    this.setId();
    this.setName(name);
    this.setPriority(priority);
    this.isDone = false;
  }

  setId() {
    if (!this.id) {
      this.id = uuidv4();
    } else {
      console.error("ID has already been defined.");
    }
  }

  getId() {
    return this.id;
  }

  setName(name) {
    if (name.length < 1) {
      throw new Error("Task name cannot be empty.");
    }
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setPriority(priority) {
    if (priority > 3 || priority < 0) {
      console.error("Priority must be a number between 0 and 3.");
      return;
    } else {
      this.priority = priority;
    }
  }

  getPriority() {
    return this.priority;
  }

  toggleStatus() {
    this.isDone = !this.isDone;
  }
}
