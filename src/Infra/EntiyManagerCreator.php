<?php

namespace ia\Infra;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Setup;

class EntityManagerCreator
{
    public function getEntityManager(): EntityManagerInterface
    {
        $caminho = [__DIR__ . '/../Entiy'];
        $modoDev = false;

        $dadosBD = array(
            'driver' => 'pdo_sqlite',
            'path' => __DIR__ . '/../../db.sqlite'
        );

        $config = Setup::createAnnoTationMetadataConfiguration($caminho, $modoDev);
        return EntityManager::create($dadosBD, $config);
    }
}
