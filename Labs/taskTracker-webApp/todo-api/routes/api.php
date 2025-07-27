<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . "/../config/Database.php";
require_once __DIR__ . "/../controllers/TaskController.php";

$database = new Database();
$db = $database->getConnection();
$controller = new TaskController($db);

$input = json_decode(file_get_contents("php://input"));
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
        http_response_code(404);
        echo json_encode(["message" => "Endpoint not found"]);
}
