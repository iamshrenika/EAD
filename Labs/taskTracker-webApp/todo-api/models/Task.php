<?php
class Task {
    private $conn;
    private $table = "tasks";

    public $id;
    public $title;
    public $description;
    public $is_done;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAll() {
        $stmt = $this->conn->query("SELECT * FROM {$this->table} ORDER BY created_at DESC");
        return $stmt;
    }

    public function create() {
        $stmt = $this->conn->prepare("INSERT INTO {$this->table} (title, description) VALUES (:title, :description)");
        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":description", $this->description);
        return $stmt->execute();
    }

    public function update() {
        $stmt = $this->conn->prepare("UPDATE {$this->table} SET title=:title, description=:description, is_done=:is_done WHERE id=:id");
        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":is_done", $this->is_done);
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }

    public function delete() {
        $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id=:id");
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }
}
