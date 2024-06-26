import TaskView from "../views/TaskView";

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
      this.projectView.clear();

      const activeProject = this.appModel.getActiveProject();
      const projectTasks = activeProject.getTasks();
      projectTasks.forEach((task) => {
        const taskName = task.getName();
        const taskPriority = task.getPriority();
        const taskId = task.getId();

        const newTaskView = new TaskView();
        newTaskView.taskRemoveOnClick((e) => this.handleTaskRemoveOnClick(e));
        this.projectView.append(
          newTaskView.render(taskName, taskPriority, taskId),
        );
      });
    }
  }

  handleTaskRemoveOnClick(e) {
    const isTaskRemoveButton = this.projectView.isTaskRemoveButton(e.target);
    if (isTaskRemoveButton) {
      const taskEl = e.target.closest("article.task");
      const taskId = this.projectView.getElementId(taskEl);
      this.projectView.removeTaskElement(taskId);
      const activeProject = this.appModel.getActiveProject();
      activeProject.removeTask(taskId);
    }
  }

  handleAddNewTaskOnSubmit(e) {
    e.preventDefault();
    const taskNameValue = this.appView.addTaskModal.taskName.value;
    const taskPriorityValue = this.appView.addTaskModal.taskPriority.value;

    const activeProject = this.appModel.getActiveProject();
    const newTask = activeProject.addNewTask(taskNameValue, taskPriorityValue);

    this.projectView.clear();

    const projectTasks = activeProject.getTasks();
    projectTasks.forEach((task) => {
      const taskName = task.getName();
      const taskPriority = task.getPriority();
      const taskId = task.getId();

      const newTaskView = new TaskView();
      newTaskView.taskRemoveOnClick((e) => this.handleTaskRemoveOnClick(e));
      this.projectView.append(
        newTaskView.render(taskName, taskPriority, taskId),
      );
    });

    this.appView.hideModals();
  }
}
