import React from 'react';
import './styles.css';

function Ticket({ id, titulo, data, premio, valor }) {
    return (
        <div className="ticket">
            <div className="numero n1">
                <span className="n1">{id.toString().padStart(4, '0')}</span>
                <span className="n1">Nº</span>
            </div>
            <div className="conteudo">
                <span><b>{titulo}</b></span>
                <span>O sorteio será realizado no dia {data} </span>
                <span>Prêmio: {premio}</span>
                <span className="valor">Valor - R$ {valor}</span>
            </div>
            <div className="conteudo pontilhado">
                <span><b>{titulo}</b></span>
                <div className="infos">
                    <span className="infos">Nome:</span>
                    <span className="lineInfo" />
                </div>
                <div className="infos">
                    <span className="infos">Telefone:</span>
                    <span className="lineInfo" />
                </div>
                <div className="infos">
                    <span className="infos">Endereço:</span>
                    <span className="lineInfo" />
                </div>
                <span className="valor">Valor: R$ {valor}</span>
            </div>
            <div className="numero n2">
                <span className="n2">Nº</span>
                <span className="n2">{id.toString().padStart(4, '0')}</span>
            </div>
        </div>
    )
}

export default Ticket;
