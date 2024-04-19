import "../src/styles/main.scss";
import MenuModel from "./models/MenuModel";
import MenuView from "./views/MenuView";
import MenuController from "./controllers/MenuController";

const docRoot = document.getElementById("root");

const menuModel = new MenuModel();
const menuView = new MenuView();
const menuController = new MenuController(docRoot, menuModel, menuView);

menuController.init();
