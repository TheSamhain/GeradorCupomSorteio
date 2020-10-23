import React from 'react';
import './styles.css';

function Ticket({ id, titulo, data, premio, valor }) {
    return (
        <div className="ticket">
            <div className="numero ">
                <span className="n1">{id.toString().padStart(4, '0')}</span>
                <span className="n1">Nº</span>
            </div>
            <div className="conteudo">
                <span>{titulo}</span>
                <span>O sorteio será realizado no dia {data} </span>
                <span>Prêmio: {premio}</span>
                <span className="valor">Valor - R$ {valor}</span>
            </div>
            <div className="conteudo">
                <span>{titulo}</span>
                <pre>Nome:     ___________________________________ </pre>
                <pre>Telefone: ___________________________________</pre>
                <span className="valor">Valor: R$ {valor}</span>
            </div>
            <div className="numero">
                <span className="n2">Nº</span>
                <span className="n2">{id.toString().padStart(4, '0')}</span>
            </div>
        </div>
    )
}

export default Ticket;
