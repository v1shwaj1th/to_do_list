
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        span.textContent = taskText;
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
