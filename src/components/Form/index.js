import React from 'react';
import './style.css';

function Form({ setTitulo, setData, setInitNum, setLastNum, initNum, lastNum, setPremio, setValor }) {

    const formatData = (data) => {
        var dia = data.substring(8, 10),
            mes = data.substring(5, 7),
            ano = data.substring(0, 4);

        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div id="form">
            <div className="linha">
                <label>Número inicial:
                    <input type="number" value={initNum} onInput={({ target: { value } }) => setInitNum(value)} />
                </label>
                <label>Número final:
                    <input type="number" value={lastNum} onInput={({ target: { value } }) => setLastNum(value)} />
                </label>
            </div>
            <div className="linha">
                <label>Título:
                    <input type="text" maxLength="30" placeholder="Título" onInput={event => setTitulo(event.target.value)} />
                </label>
                <label>Dia do Sorteio:
                    <input type="date" onInput={event => setData(formatData(event.target.value))} />
                </label>
                <label>Valor:
                    <input type="text" placeholder="Valor" onInput={event => setValor(event.target.value)} />
                </label>
            </div>
            <div className="linha">
                <label>Prêmio:
                <input type="text" maxLength="69" placeholder="Prêmio" onInput={event => setPremio(event.target.value)} />
                </label>
                <button onClick={() => window.print()}> IMPRIMIR</button>
            </div>
        </div>
    );
}

export default Form;