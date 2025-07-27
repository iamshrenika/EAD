import React from "react";
import { updateTask, deleteTask } from "../services/taskService";

function TaskList({ tasks, onUpdate }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => {
        const isDone = Number(task.is_done) === 1;

        return (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{task.title}</strong> – {task.description}
              <span className={`badge ms-2 ${isDone ? "badge-done" : "badge-pending"}`}>
                {isDone ? "Done" : "Pending"}
              </span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-custom me-2"
                onClick={() =>
                  updateTask({ ...task, is_done: isDone ? 0 : 1 }).then(onUpdate)
                }
              >
                Mark {isDone ? "Pending" : "Done"}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id).then(onUpdate)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
