import "../src/styles/main.scss";
import MenuModel from "./models/MenuModel";
import MenuView from "./views/MenuView";
import MenuController from "./controllers/MenuController";

const root = document.getElementById("root");
const menuModel = new MenuModel();
const menuView = new MenuView();
const menuController = new MenuController(menuModel, menuView);

root.appendChild(menuView.render());
root.appendChild(footerView.render());
