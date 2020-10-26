import React from 'react';
import './style.css';

function Form({ setTitulo, setData, setInitNum, setLastNum, setPremio, setValor, initNum, lastNum, titulo, data, premio, valor, }) {

    const formatData = (data) => {
        var dia = data.substring(8, 10),
            mes = data.substring(5, 7),
            ano = data.substring(0, 4);

        return `${dia}/${mes}/${ano}`;
    }

    const unformatData = (data) => {
        var dia = data.substring(0, 2),
            mes = data.substring(3, 5),
            ano = data.substring(6, 10);

        return `${ano}-${mes}-${dia}`;
    }

    const imprimir = () => {
        var value = {
            initNum,
            lastNum,
            titulo,
            data,
            premio,
            valor,
        };
        var cookie = ['dados', '=', JSON.stringify(value), '; path=/;', '; SameSite=Lax'].join('');
        document.cookie = cookie;
        window.print();
    }

    return (
        <div id="form" >
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
                    <input type="text" value={titulo} maxLength="30" placeholder="Título" onInput={event => setTitulo(event.target.value)} />
                </label>
                
                <label>Dia do Sorteio:
                    <input type="date" value={unformatData(data)} onInput={event => setData(formatData(event.target.value))} />
                </label>
                <label>Valor:
                    <input type="text" value={valor} placeholder="Valor" onInput={event => setValor(event.target.value)} />
                </label>
            </div>
            <div className="linha">
                <label>Prêmio:
                <input type="text" value={premio} maxLength="69" placeholder="Prêmio" onInput={event => setPremio(event.target.value)} />
                </label>
                <button onClick={() => imprimir()}> IMPRIMIR</button>
            </div>
        </div >
    );
}

export default Form;