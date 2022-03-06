class TaskManager {
  constructor(selector) {
    this.task_list = document.querySelector(selector);
    this.template = this.task_list.querySelector(".template");
  }

  addItem(task) {
    const task_item = this.template.cloneNode(true);
    task_item.classList.remove("template");
    task_item.querySelector(".todo_list__text").textContent = task;
    this.task_list.append(task_item);
  }
}
