import debounce from "../utils/debounce";

export default class FooterController {
  constructor(footerModel, footerView, appModel, appView) {
    this.footerModel = footerModel;
    this.footerView = footerView;
    this.appModel = appModel;
    this.appView = appView;
    this.footerView.listProjectsIcon.onClick((e) =>
      this.handleListProjectsOnClick(e),
    );
  }

  handleListProjectsOnClick(e) {
    e.stopPropagation();
    console.log(e.bubbles);
    this.appView.modal.toggleState();
    this.appView.modal.isActive
      ? this.appView.modal.show()
      : this.appView.modal.hide();
  }
}
