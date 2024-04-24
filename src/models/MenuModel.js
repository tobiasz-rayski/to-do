export default class MenuModel {
  constructor() {
    this.menu = {
      isActive: false,
    };
  }

  toggleMenuState() {
    this.menu.isActive = !this.menu.isActive;
  }
}
