import "../src/styles/main.scss";
import MenuModel from "./models/MenuModel";
import TaskModel from "./models/TaskModel";
import MenuView from "./views/MenuView";
import TaskView from "./views/TaskView";
import MenuController from "./controllers/MenuController";
import TaskController from "./controllers/TaskControlller";

const docRoot = document.getElementById("root");

const menuModel = new MenuModel();
const taskModel = new TaskModel();

const menuView = new MenuView();
const taskView = new TaskView();

const menuController = new MenuController(docRoot, menuModel, menuView);
const taskController = new TaskController(docRoot, taskModel, taskView);

menuController.init();
taskController.init();
