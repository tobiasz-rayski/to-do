import { v4 as uuidv4 } from "uuid";

export default class ProjectModel {
  constructor() {
    this.id = uuidv4();
  }

  getId() {
    return this.id;
  }
}
