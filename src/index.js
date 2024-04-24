import "../src/styles/main.scss";

import AppModel from "./models/AppModel";
import MenuModel from "./models/MenuModel";
import ProjectModel from "./models/ProjectModel";
import FooterModel from "./models/FooterModel";

import AppView from "./views/AppView";
import MenuView from "./views/MenuView";
import ProjectView from "./views/ProjectView";
import FooterView from "./views/FooterView";

import AppController from "./controllers/AppController";
import MenuController from "./controllers/MenuController";
import FooterController from "./controllers/FooterController";

const menuModel = new MenuModel();
const appModel = new AppModel();
const footerModel = new FooterModel();

const appView = new AppView();
const menuView = new MenuView();
const projectView = new ProjectView();
const footerView = new FooterView();

const appController = new AppController(
  appModel,
  appView,
  menuView,
  projectView,
  footerView,
);

const menuController = new MenuController(menuModel, menuView, appModel);

const footerController = new FooterController(
  footerModel,
  footerView,
  appModel,
  appView,
);
