import debounce from "../utils/debounce";

export default class ButtonIcon {
  constructor() {
    this.button = document.createElement("button");
    this.button.classList.add("button", "icon");
  }

  render() {
    return this.button;
  }

  onClick(handler) {
    this.button.addEventListener("click", debounce(handler, 50));
  }
}
