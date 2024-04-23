export default class MenuController {
  constructor(menuModel, menuView) {
    this.menuModel = menuModel;
    this.menuView = menuView;
    this.menuView.hamburgerIcon.onClick(() => this.handleHamburgerOnClick());
  }

  toggleMenuState() {
    this.menuModel.menu.isOpen = !this.menuModel.menu.isOpen;
  }

  handleHamburgerOnClick() {
    this.toggleMenuState();
    this.menuModel.menu.isOpen
      ? this.menuView.hamburgerIcon.animateOpen()
      : this.menuView.hamburgerIcon.animateClose();
  }
}
