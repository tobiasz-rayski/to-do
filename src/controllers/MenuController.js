export default class menuController {
  constructor(menuModel, menuView) {
    this.menuModel = menuModel;
    this.menuView = menuView;
    this.menuView.hamburgerIcon.onClick(() => this.handleHamburgerOnClick());
    this.isMenuOpen = this.menuModel.menu.isOpen;
  }

  toggleMenuState() {
    this.menuModel.menu.isOpen = !this.menuModel.menu.isOpen;
  }

  handleHamburgerOnClick() {
    this.toggleMenuState();

    if (this.menuModel.menu.isOpen) {
      this.menuView.hamburgerIcon.animateOpen();
    } else if (!this.isMenuOpen) {
      this.menuView.hamburgerIcon.animateClose();
    }
  }
}
