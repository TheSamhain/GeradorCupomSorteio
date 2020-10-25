import React, { useState } from 'react';
import Form from '../../components/Form';
import Ticket from '../../components/Ticket';
import './style.css';

function Home() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  const items = [];
  const [initNum, setInitNum] = useState(1);
  const [lastNum, setLastNum] = useState(1);
  const [titulo, setTitulo] = useState('Título do sorteio');
  const [data, setData] = useState(today);
  const [premio, setPremio] = useState('prêmio do sorteio');
  const [valor, setValor] = useState("1,00");

  for (var i = initNum; i <= lastNum; i++) {
    items.push(<Ticket
      id={i}
      titulo={titulo}
      data={data}
      premio={premio}
      valor={valor}
      key={i}
    />);
  }

  return (
    <div id="principal">
      <Form
        setTitulo={setTitulo}
        setData={setData}
        setInitNum={setInitNum}
        setLastNum={setLastNum}
        initNum={initNum}
        lastNum={lastNum}
        setPremio={setPremio}
        setValor={setValor}
      />
      <div id="tickets">
        {items}
      </div>
    </div>
  );
}

export default Home;
