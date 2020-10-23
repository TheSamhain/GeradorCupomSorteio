import React, { useState } from 'react';
import Form from './components/form';
import Ticket from './components/ticket';
import './style.css';

function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const items = [];
  const [qtde, setQtde] = useState(1);
  const [titulo, setTitulo] = useState('Título');
  const [data, setData] = useState(today);
  const [premio, setPremio] = useState('Prêmio');
  const [valor, setValor] = useState("1,00");

  for (var i = 1; i <= qtde; i++) {
    items.push(<Ticket
      id={i}
      titulo={titulo}
      data={data}
      premio={premio}
      valor={valor}
    />);
  }

  return (
    <div>
      <Form
        setTitulo={setTitulo}
        setData={setData}
        setQtde={setQtde}
        qtde={qtde}
        setPremio={setPremio}
        setValor={setValor}
      />
      <div id="principal">
        {items}
      </div>
    </div>
  );
}

export default App;
