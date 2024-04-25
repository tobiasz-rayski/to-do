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

    const projects = this.appModel.getProjects();
    this.appView.append(this.appView.listProjectsModal.render(projects));
    this.appView.append(this.appView.addProjectModal.render());
    this.appView.documentOnClick((e) => this.handleDocumentOnClick(e));
    this.appView.addProjectModal.onEnter((e) =>
      this.handleAddProjectOnEnter(e),
    );
  }

  handleDocumentOnClick(e) {
    const modalsDOM = this.appView.getModalsDOM();
    const modals = this.appView.getModals();

    const isClickOutsideModal = Array.from(modalsDOM).every(
      (modal) => !modal.contains(e.target),
    );

    const isButton = e.target.closest("button");

    if (isButton) {
      return;
    }

    if (isClickOutsideModal) {
      modals.forEach((modal) => {
        if (modal.isActive) {
          modal.toggleState();
          modal.hide();
        }
      });
    }
  }

  handleAddProjectOnEnter(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();

      console.log("You eneter: ", e.target.value);
      e.target.value = "";
    }
  }
}
