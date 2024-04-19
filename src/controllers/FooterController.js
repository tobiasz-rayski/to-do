export default class FooterController {
  constructor(docRoot, footerView, footerModel) {
    this.docRoot = docRoot;
    this.footerView = footerView;
    this.footerModel = footerModel;
  }

  init() {
    docRoot.appendChild(this.footerView.render());
  }
}
