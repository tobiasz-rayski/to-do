import HamburgerIcon from "../components/HamburgerIcon";

export default class MenuView {
  constructor() {
    this.hamburgerIcon = new HamburgerIcon();
    this.menu = document.createElement("nav");
    this.menu.id = "menu";
  }

  render() {
    this.menu.appendChild(this.hamburgerIcon.render());
    return this.menu;
  }
}
