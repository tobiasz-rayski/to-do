export default class FooterController {
  constructor(docRoot, footerModel, footerView) {
    this.docRoot = docRoot;
    this.footerModel = footerModel;
    this.footerView = footerView;
  }

  init() {
    this.docRoot.appendChild(this.footerView.render());
  }
}
