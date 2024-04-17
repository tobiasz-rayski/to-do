import "../src/styles/main.scss";
import HamburgerIcon from "./components/HamburgerIcon";
import NavbarModel from "./models/NavbarModel";
import NavbarView from "./views/NavbarView";
import NavbarController from "./controllers/NavbarController";

const root = document.getElementById("root");

const hamburgerIcon = new HamburgerIcon();

const navbarModel = new NavbarModel();
const navbarView = new NavbarView(hamburgerIcon);
const navbarController = new NavbarController(navbarModel, navbarView);
root.appendChild(navbarView.render());
