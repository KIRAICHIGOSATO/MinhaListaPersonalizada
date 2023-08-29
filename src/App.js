//Paulo Castelli//
import React from 'react';

const MinhaLista = () => {
  const itens = [
    { carro: 'Fusca', ano: 1975 },
    { carro: 'Fusion', ano: 1979 },
    { carro: 'Passats', ano: 1985 },
    { carro: 'Opalla', ano: 1997 },
    { carro: 'Gol', ano: 2005 },
    { carro: 'Civic', ano: 2007 },
    { carro: 'Uno', ano: 2010 },
    { carro: 'Corolla', ano: 2015 },
    { carro: 'Onix', ano: 2019 },
    { carro: 'Jeep Renegade', ano: 2023 }
  ];

  return (
    <div>
      <h1>Minha Lista Personalizada</h1>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.carro} - {item.ano}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinhaLista;
