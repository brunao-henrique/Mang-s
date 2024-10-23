import React, { useState } from 'react';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Mangá de One Piece',
      preco: 'R$ 29,90',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBZh2UpzLj8efScUh-KXZcfKbIaJeF4P7uQ&s',
    },
    {
      id: 2,
      nome: 'Mangá de Blue Box',
      preco: 'R$ 29,90',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJOm8Sqh5ippTs2Geic8ntXg-G2eK17Jzaw&s',
    },
    {
      id: 3,
      nome: 'Mangá de Naruto',
      preco: 'R$ 29,90',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjqpuKZtAWuMF7ufTfQHCdXUg0ZUxJJo3Yw&s',
    },
    {
      id: 4,
      nome: 'Mangá de Horimiya',
      preco: 'R$ 29,90',
      image: 'https://down-br.img.susercontent.com/file/5d70f89cdaa77c6f0e51637aa1bb1cf9',
    },
    {
      id: 5,
      nome: 'Mangá de Kimetsu',
      preco: 'R$ 29,90',
      image: 'https://www.geralgeek.com.br/anuncio/manga-livro-demon-slayer-kimetsu-no-yaiba-borboleta-de-uma-asa-panini/280597',
    },
  ];

  return (
    <div>
      <h1>Lista de Mangás</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <img src={produto.image} alt={produto.nome} style={{ width: '100px', height: 'auto' }} />
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
