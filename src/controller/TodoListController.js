
class TodoListController {
    constructor(updateViewCallback) {
        this.taskList = [];
        this.updateView = updateViewCallback;
    }

    addTask(task) {
        if (!task.trim()) {
            return 'Please enter a task';
        }
        this.taskList.push(task);
        this.updateView(this.taskList);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
        this.updateView(this.taskList);
    }

    editTask(index, task) {
        this.taskList[index] = task;
        this.updateView(this.taskList);
    }

}