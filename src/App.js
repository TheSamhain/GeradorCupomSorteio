import React from 'react';
import './style.css';

function App() {
  return (
    <div id="principal">
      <div class="linha">
        <div class="numero ">
          <span class="n1">0001</span>
          <span class="n1">Nº</span>
        </div>
        <div class="conteudo">
          <span>Sorteio de natal<br />Cosméticos</span>
          <span>O sorteio será realizado no dia </span>
          <span>Prêmio: Uma cesta com produtos de cosméticos e perfumaria.</span>
          <span class="valor">Valor - R$ 5,00</span>
        </div>
        <div class="conteudo">
          <span>Sorteio de natal<br />Cosméticos</span>
          <pre>Nome:     ___________________________________ </pre>
          <pre>Telefone: ___________________________________</pre>
          <span class="valor">Valor - R$ 5,00</span>
        </div>
        <div class="numero">
          <span class="n2">Nº</span>
          <span class="n2">0001</span>
        </div>
      </div>
    </div>
  );
}

export default App;
