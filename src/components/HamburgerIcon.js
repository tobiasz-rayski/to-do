import ButtonIcon from "./ButtonIcon";

export default class HamburgerIcon extends ButtonIcon {
  constructor() {
    super();
    this.button.id = "hamburgerIcon";
    this.button.innerHTML = `
        <svg
          viewBox="0 0 100 100"
          fill="black"
          stroke="black"
        >
          <line
            x1="15"
            x2="85"
            y1="25"
            y2="25"
            stroke-width="7"
            stroke-linecap="round"
            class="line-1"
          ></line>
          <line
            x1="15"
            x2="85"
            y1="50"
            y2="50"
            stroke-width="7"
            stroke-linecap="round"
            class="line-2"
          ></line>
          <line
            x1="15"
            x2="85"
            y1="75"
            y2="75"
            stroke-width="7"
            stroke-linecap="round"
            class="line-3"
          ></line>
        </svg>
      `;
  }

  animateOpen() {
    this.button.classList.remove("open", "close");
    this.button.classList.add("open");
  }

  animateClose() {
    this.button.classList.remove("open", "close");
    this.button.classList.add("close");
  }
}
