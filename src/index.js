import "../src/styles/main.scss";

import AppModel from "./models/AppModel";
import MenuModel from "./models/MenuModel";
import ProjectModel from "./models/ProjectModel";

import AppView from "./views/AppView";
import MenuView from "./views/MenuView";
import ProjectView from "./views/ProjectView";
import FooterView from "./views/FooterView";

import AppController from "./controllers/AppController";
import MenuController from "./controllers/MenuController";

const menuModel = new MenuModel();
const appModel = new AppModel();

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

const menuController = new MenuController(menuModel, menuView, appModel);

const docRoot = document.getElementById("docRoot");
const modal = document.createElement("div");
modal.id = "modal";
docRoot.prepend(modal);
