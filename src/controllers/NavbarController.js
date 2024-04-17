export default class NavbarController {
  constructor(navbarModel, navbarView) {
    this.navbarModel = navbarModel;
    this.navbarView = navbarView;
    this.navbarView.hamburgerIcon.onClick(() => this.handleHamburgerOnClick());
    this.isMenuOpen = this.navbarModel.mainMenu.isOpen;
  }

  toggleMenuState() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleHamburgerOnClick() {
    this.toggleMenuState();

    if (this.isMenuOpen) {
      this.navbarView.hamburgerIcon.animateOpen();
    } else if (!this.isMenuOpen) {
      this.navbarView.hamburgerIcon.animateClose();
    }
  }
}
