export default class MenuController {
  constructor(menuModel, menuView, appModel) {
    this.menuModel = menuModel;
    this.menuView = menuView;
    this.appModel = appModel;
    this.menuView.hamburgerIcon.onClick(() => this.handleHamburgerOnClick());
    this.init();
  }

  init() {
    this.updateActiveProject();
  }

  handleHamburgerOnClick() {
    this.menuModel.toggleMenuState();
    this.menuModel.menu.isActive
      ? this.menuView.hamburgerIcon.animateOpen()
      : this.menuView.hamburgerIcon.animateClose();
  }

  updateActiveProject() {
    const activeProjectName = this.appModel.getActiveProjectName();
    this.menuView.renderActiveProject(activeProjectName);
  }
}
