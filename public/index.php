<?php

require __DIR__ . '/../vendor/autoload.php';

use WEG\IA\Controller\InterfaceRequisicao;

$caminho = $_SERVER['PATH_INFO'];

if (file_exists($caminho)) return false;

$rotas = require __DIR__ . '/../config/routes.php';

if(!array_key_exists($caminho, $rotas)){
    http_response_code(404);
    exit();
}

$classeControladora = $rotas[$caminho];
/** @var InterfaceRequisicao $controlador */
$controlador = new $classeControladora();

$controlador->fazRequisicao();
