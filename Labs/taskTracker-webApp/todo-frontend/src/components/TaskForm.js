import React, { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");  // <-- add error state

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      setError("Please provide both a title and a description.");
      return;
    }
    setError(""); // clear error when inputs are valid

    createTask({ title, description }).then(() => {
      setTitle("");
      setDescription("");
      onTaskAdded();
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="row g-2 align-items-center mb-4 taskform-row"
    >
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <button type="submit" className="btn w-100 btn-custom">
          Add Task
        </button>
      </div>

      {/* Show error message if exists */}
      {error && (
        <div className="col-12 mt-2">
          <small className="text-danger">{error}</small>
        </div>
      )}
    </form>
  );
}

export default TaskForm;
