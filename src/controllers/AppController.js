export default class AppController {
  constructor(appModel, appView, menuView, projectView, footerView) {
    this.appModel = appModel;
    this.appView = appView;
    this.menuView = menuView;
    this.projectView = projectView;
    this.footerView = footerView;
    this.init();
  }

  init() {
    this.appView.appendRoot();
    this.appView.append(this.menuView.render());
    this.appView.append(this.projectView.render());
    this.appView.append(this.footerView.render());
    this.appView.append(this.appView.modal.render(this.appModel.getProjects()));
  }
}
