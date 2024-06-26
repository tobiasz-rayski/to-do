import ButtonIcon from "./ButtonIcon";

export default class AddTaskIcon extends ButtonIcon {
  constructor() {
    super();
    this.button.id = "addTaskIcon";
    this.button.innerHTML = `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
    this.button.dataset.triggers = "addNewTaskForm";
  }
}
