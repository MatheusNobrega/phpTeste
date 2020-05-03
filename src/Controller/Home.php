<?php

namespace ia\Controller;

use ia\Helper\RenderizadorHtmlTrait;

class Home implements InterfaceRequisicao
{
    use RenderizadorHtmlTrait;

    public function fazRequisicao(): void
    {
        echo $this->renderizaHtml('home.php', []);
    }
}
