import "../src/styles/main.scss";
import MenuModel from "./models/MenuModel";
import TaskModel from "./models/TaskModel";
import FooterModel from "./models/FooterModel";
import MenuView from "./views/MenuView";
import TaskView from "./views/TaskView";
import FooterView from "./views/FooterView";
import MenuController from "./controllers/MenuController";
import TaskController from "./controllers/TaskControlller";
import FooterController from "./controllers/FooterController";

const docRoot = document.getElementById("root");

const menuModel = new MenuModel();
const taskModel = new TaskModel();
const footerModel = new FooterModel();

const menuView = new MenuView();
const taskView = new TaskView();
const footerView = new FooterView();

const menuController = new MenuController(docRoot, menuModel, menuView);
const taskController = new TaskController(docRoot, taskModel, taskView);
const footerController = new FooterController(docRoot, footerModel, footerView);

menuController.init();
taskController.init();
footerController.init();
