<?php
require_once __DIR__ . "/../models/Task.php";

class TaskController {
    private $db;
    private $task;

    public function __construct($db) {
        $this->db = $db;
        $this->task = new Task($db);
    }

    public function read() {
        $stmt = $this->task->getAll();
        $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tasks);
    }

    public function create($data) {
        $this->task->title = $data->title;
        $this->task->description = $data->description;
        if ($this->task->create()) {
            http_response_code(201);
            echo json_encode(["message" => "Task created"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error creating task"]);
        }
    }

    public function update($data) {
        $this->task->id = $data->id;
        $this->task->title = $data->title;
        $this->task->description = $data->description;
        $this->task->is_done = $data->is_done;
        if ($this->task->update()) {
            echo json_encode(["message" => "Task updated"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error updating task"]);
        }
    }

    public function delete($data) {
        $this->task->id = $data->id;
        if ($this->task->delete()) {
            echo json_encode(["message" => "Task deleted"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error deleting task"]);
        }
    }
}
