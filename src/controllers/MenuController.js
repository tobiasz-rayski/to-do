export default class menuController {
  constructor(docRoot, menuModel, menuView) {
    this.menuModel = menuModel;
    this.menuView = menuView;
    this.menuView.hamburgerIcon.onClick(() => this.handleHamburgerOnClick());
    this.docRoot = docRoot;
    this.init();
  }

  init() {
    this.docRoot.appendChild(this.menuView.render());
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
