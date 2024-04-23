import "../src/styles/main.scss";

import MenuModel from "./models/MenuModel";

import AppView from "./views/AppView";
import MenuView from "./views/MenuView";
import ProjectView from "./views/ProjectView";
import FooterView from "./views/FooterView";

import AppController from "./controllers/AppController";
import MenuController from "./controllers/MenuController";

const menuModel = new MenuModel();

const appView = new AppView();
const menuView = new MenuView();
const projectView = new ProjectView();
const footerView = new FooterView();

const appController = new AppController(
  appView,
  menuView,
  projectView,
  footerView,
);
const menuController = new MenuController(menuModel, menuView);
