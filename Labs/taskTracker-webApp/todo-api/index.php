<?php
// Allow frontend access
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// For preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/Database.php';
require_once 'controllers/TaskController.php';

// ✅ Create DB connection
$database = new Database();
$db = $database->getConnection();

// ✅ Inject DB connection into controller
$controller = new TaskController($db);

// ✅ Read JSON input if it's a POST/PUT/DELETE request
$input = json_decode(file_get_contents("php://input"));

// Route logic
$route = $_GET['route'] ?? '';

switch ($route) {
    case 'read':
        $controller->read();
        break;
    case 'create':
        $controller->create($input);
        break;
    case 'update':
        $controller->update($input);
        break;
    case 'delete':
        $controller->delete($input);
        break;
    default:
        echo json_encode(["message" => "Endpoint not found"]);
        break;
}



