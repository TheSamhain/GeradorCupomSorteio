import React, { useState } from 'react';
import Form from '../../components/Form';
import Ticket from '../../components/Ticket';
import './style.css';

function Home() {
  var today = new Date();
  today = today.toLocaleString('pt-BR').substring(0, 10);


  var cookie = document.cookie.split(';')[0].replace('dados=', '');

  var jsonCookie = {};

  if (cookie) {
    jsonCookie = JSON.parse(cookie);
  } else {
    jsonCookie = {
      initNum: 1,
      lastNum: 1,
      titulo: "Título do sorteio",
      data: today,
      premio: "prêmio do sorteio",
      valor: "1,00",
    }
  }

  const items = [];
  const [initNum, setInitNum] = useState(jsonCookie.initNum);
  const [lastNum, setLastNum] = useState(jsonCookie.lastNum);
  const [titulo, setTitulo] = useState(jsonCookie.titulo);
  const [data, setData] = useState(jsonCookie.data);
  const [premio, setPremio] = useState(jsonCookie.premio);
  const [valor, setValor] = useState(jsonCookie.valor);

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
        setPremio={setPremio}
        setValor={setValor}
        initNum={initNum}
        lastNum={lastNum}
        titulo={titulo}
        data={data}
        premio={premio}
        valor={valor}

      />
      <div id="tickets">
        {items}
      </div>
    </div>
  );
}

export default Home;
