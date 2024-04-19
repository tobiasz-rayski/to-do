import HamburgerIcon from "../components/HamburgerIcon";

export default class mainMenuView {
  constructor() {
    this.hamburgerIcon = new HamburgerIcon();
    this.mainMenu = document.createElement("nav");
    this.mainMenu.id = "mainMenu";
  }

  render() {
    this.mainMenu.appendChild(this.hamburgerIcon.render());
    return this.mainMenu;
  }
}
