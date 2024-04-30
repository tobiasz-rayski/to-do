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

  addNewTask(task) {
    const newTask = new TaskModel();
    this.tasks.push(task);
    return newTask;
  }
}
