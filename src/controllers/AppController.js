export default class AppController {
  constructor(
    appModel,
    appView,
    menuView,
    projectView,
    footerView,
    menuController,
  ) {
    this.appModel = appModel;
    this.appView = appView;
    this.menuView = menuView;
    this.projectView = projectView;
    this.footerView = footerView;
    this.menuController = menuController;
    this.init();
  }

  init() {
    this.appView.appendRoot();
    this.appView.append(this.menuView.render());

    const activeProject = this.appModel.getActiveProject();
    const projectTasks = activeProject.getTasks();
    this.appView.append(this.projectView.render(projectTasks));
    this.appView.append(this.footerView.render());

    const projects = this.appModel.getProjects();
    this.appView.append(this.appView.listProjectsModal.render(projects));
    this.appView.append(this.appView.addProjectModal.render());
    this.appView.append(this.appView.addTaskModal.render());
    this.appView.documentOnClick((e) => this.handleDocumentOnClick(e));
    this.appView.addProjectModal.onEnter((e) =>
      this.handleAddProjectOnEnter(e),
    );
    this.appView.listProjectsModal.onClick((e) =>
      this.handleListItemOnClick(e),
    );
    this.appView.addTaskModal.onSubmit((e) => this.handleAddNewTaskOnSubmit(e));
  }

  handleDocumentOnClick(e) {
    const modalsDOM = this.appView.getModalsDOM();
    const modals = this.appView.getModals();

    const isClickOutsideModal = Array.from(modalsDOM).every(
      (modal) => !modal.contains(e.target),
    );

    const isButton = e.target.closest("button");

    if (isButton) {
      return;
    }

    if (isClickOutsideModal) {
      modals.forEach((modal) => {
        if (modal.isActive) {
          modal.toggleState();
          modal.hide();
        }
      });
    }
  }

  handleAddProjectOnEnter(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      this.appModel.addNewProject(e.target.value);
      e.target.value = "";
      const projects = this.appModel.getProjects();
      this.appView.listProjectsModal.clear();
      this.appView.listProjectsModal.render(projects);
      this.appView.hideModals();
    }
  }

  handleListItemOnClick(e) {
    if (e.target.dataset.id) {
      this.appModel.setActiveProject(e.target.dataset.id);
      this.menuController.updateActiveProject();
      this.appView.hideModals();
    }
  }

  handleAddNewTaskOnSubmit(e) {
    e.preventDefault();
    const activeProject = this.appModel.getActiveProject();
    const taskNameValue = this.appView.addTaskModal.taskName.value;
    const taskPriorityValue = this.appView.addTaskModal.taskPriority.value;
    const newTask = activeProject.addNewTask(taskNameValue, taskPriorityValue);
    const projectTasks = activeProject.getTasks();
    this.appView.hideModals();
    this.projectView.render(projectTasks);
  }
}
