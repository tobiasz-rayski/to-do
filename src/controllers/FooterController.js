export default class FooterController {
  constructor(footerModel, footerView, appModel) {
    this.footerModel = footerModel;
    this.footerView = footerView;
    this.appModel = appModel;
    this.footerView.addProjectIcon.onClick(() =>
      this.handleAddProjectOnClick(),
    );
  }

  handleAddProjectOnClick() {
    this.appView.displayAddProjectModal();
  }
}
