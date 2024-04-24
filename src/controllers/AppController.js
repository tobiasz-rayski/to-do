export default class AppController {
  constructor(appView, menuView, projectView, footerView) {
    this.appView = appView;
    this.menuView = menuView;
    this.projectView = projectView;
    this.footerView = footerView;
    this.init();
  }

  init() {
    this.appView.appendRoot();
    this.appView.appendMenuView(this.menuView.render());
    this.appView.appendProjectView(this.projectView.render());
    this.appView.appendFooterView(this.footerView.render());
  }
}
