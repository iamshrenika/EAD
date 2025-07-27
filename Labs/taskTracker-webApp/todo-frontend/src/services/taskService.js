import axios from "axios";

const API_BASE = "https://tasktracker.infinityfreeapp.com/todo-api/index.php";

export const getTasks = () =>
  axios.get(`${API_BASE}?route=read`).then(res => res.data);

export const createTask = data =>
  axios.post(`${API_BASE}?route=create`, data);

export const updateTask = data =>
  axios.post(`${API_BASE}?route=update`, data);

export const deleteTask = id =>
  axios.post(`${API_BASE}?route=delete`, { id });
