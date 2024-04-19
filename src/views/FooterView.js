export default class FooterView {
  constructor() {
    this.footer = document.createElement("nav");
    this.footer.id = "footer";
  }

  render() {
    return this.footer;
  }
}
