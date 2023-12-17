function addTask() {
    var newTaskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-list");

    if (newTaskInput.value !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = newTaskInput.value;
        taskList.appendChild(newTask);
        newTaskInput.value = "";
    }
}
