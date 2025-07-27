import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/taskService";
import './index.css'; // make sure CSS imported

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    getTasks()
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Separate tasks into pending and completed
  const pendingTasks = tasks.filter(task => Number(task.is_done) === 0);
  const completedTasks = tasks.filter(task => Number(task.is_done) === 1);

  return (
    <div>
      <nav className="navbar navbar-custom mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">🌸 Task Tracker</span>
        </div>
      </nav>

      <div className="container">
        <div className="card p-4 mb-4">
          <h2 className="mb-4">Add New Task</h2>
          <TaskForm onTaskAdded={fetchTasks} />
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-3 task-card">
              <h3>Pending Tasks</h3>
              {pendingTasks.length === 0 ? (
                <p className="text-muted">No pending tasks</p>
              ) : (
                <TaskList tasks={pendingTasks} onUpdate={fetchTasks} />
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 task-card">
              <h3>Completed Tasks</h3>
              {completedTasks.length === 0 ? (
                <p className="text-muted">No completed tasks</p>
              ) : (
                <TaskList tasks={completedTasks} onUpdate={fetchTasks} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

