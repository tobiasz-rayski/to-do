export default class FooterController {
  constructor(footerModel, footerView, appModel, appView) {
    this.footerModel = footerModel;
    this.footerView = footerView;
    this.appModel = appModel;
    this.appView = appView;
    this.init();
  }

  init() {
    this.footerView.listProjectsIcon.onClick((e) =>
      this.handleListProjectsOnClick(e),
    );
    this.footerView.addProjectIcon.onClick((e) =>
      this.handleAddProjectOnClick(e),
    );
  }

  handleListProjectsOnClick(e) {
    const modal = this.appView.listProjectsModal;

    if (modal.isActive) {
      modal.toggleState();
      modal.update();
    } else {
      this.appView.hideModals();
      modal.toggleState();
      modal.update();
    }
  }

  handleAddProjectOnClick(e) {
    const modal = this.appView.addProjectModal;

    if (modal.isActive) {
      modal.toggleState();
      modal.update();
    } else {
      this.appView.hideModals();
      modal.toggleState();
      modal.update();
      modal.input.focus();
    }
  }
}
