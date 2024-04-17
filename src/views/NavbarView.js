export default class NavbarView {
  constructor(hamburgerIcon) {
    this.nav = document.createElement("nav");
    this.nav.id = "mainMenu";
    this.hamburgerIcon = hamburgerIcon;
  }

  render() {
    this.nav.appendChild(this.hamburgerIcon.render());

    return this.nav;
  }
}
