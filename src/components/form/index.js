import React from 'react';
import './style.css';

function Form({ setTitulo, setData, setQtde, qtde, setPremio, setValor }) {
    return (
        <div id="form">
            <label>Número de Cupons:<input type="text" value={qtde} onInput={event => setQtde(event.target.value)} /></label>
            <label>Título:<input type="text" placeholder="Título" onInput={event => setTitulo(event.target.value)} /></label>
            <label>Dia do Sorteio:
                <input type="date" onInput={event => {
                    var data = event.target.value,
                        dia = data.substring(8, 10),
                        mes = data.substring(5, 7),
                        ano = data.substring(0, 4);

                    setData(`${dia}/${mes}/${ano}`)
                }} />
            </label>
            <label>Prêmio:<input type="text" placeholder="Prêmio" onInput={event => setPremio(event.target.value)} /></label>
            <label>Valor:<input type="text" placeholder="Valor" onInput={event => setValor(event.target.value)} /></label>
        </div>
    );
}

export default Form;