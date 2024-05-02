import { v4 as uuidv4 } from "uuid";
import TaskModel from "./TaskModel";

export default class ProjectModel {
  constructor(name) {
    this.setId();
    this.setName(name);
    this.tasks = [];
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
      throw new Error("Project name cannot be empty.");
    }
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addNewTask(name, priority) {
    const newTask = new TaskModel(name, priority);
    this.tasks.push(newTask);
    console.log(this.tasks);
    return newTask;
  }

  removeTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      console.log(this.tasks);
    } else {
      return;
    }
  }

  getTasks() {
    return this.tasks;
  }
}
