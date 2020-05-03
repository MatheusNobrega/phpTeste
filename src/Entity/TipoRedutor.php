<?php

namespace ia\Entity;

/**
 * @Entity
 * @Table(name="usuarios")
 */

class TipoRedutor
{
    /**
     * @Id
     * @GeneratedValue
     * @Column(type="integer") */
    private $id;
    /**
     * @Column(type="string") 
     */
    private $tipoRedutor;
    /**
     * @Column(type="string") 
     */
    private $imagem;
    /**
     * @Column(type="string") 
     */
    private $caminho;
    /**
     * @Column(type="integer") 
     */
    private $sequencia;

    public function getId(): string
    {
        return $this->id;
    }

    public function getTipoRedutor(): string
    {
        return $this->tipoRedutor;
    }

    public function setTipoRedutor(): string
    {
        return $this->tipoRedutor;
    }

    public function getImagem(): string
    {
        return $this->imagem;
    }

    public function setImagem(): string
    {
        return $this->imagem;
    }
    public function getCaminho(): string
    {
        return $this->caminho;
    }

    public function setCaminho(): string
    {
        return $this->caminho;
    }

    public function getSequencia(): int
    {
        return $this->sequencia;
    }

    public function setSequencia(): int
    {
        return $this->sequencia;
    }
}