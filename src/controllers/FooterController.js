export default class FooterController {
  constructor(footerModel, footerView, appModel, appView) {
    this.footerModel = footerModel;
    this.footerView = footerView;
    this.appModel = appModel;
    this.appView = appView;
    this.footerView.listProjectsIcon.onClick((e) =>
      this.handleListProjectsOnClick(e),
    );
    this.footerView.addProjectIcon.onClick((e) =>
      this.handleAddProjectOnClick(e),
    );
  }

  handleListProjectsOnClick(e) {
    e.stopPropagation();
    this.appView.listProjectsModal.toggleState();
    this.appView.listProjectsModal.isActive
      ? this.appView.listProjectsModal.show()
      : this.appView.listProjectsModal.hide();
  }

  handleAddProjectOnClick(e) {
    e.stopPropagation();
    const modal = this.appView.addProjectModal;
    modal.toggleState();
    if (modal.isActive) {
      modal.show();
      modal.input.focus();
    } else modal.hide();
  }
}
