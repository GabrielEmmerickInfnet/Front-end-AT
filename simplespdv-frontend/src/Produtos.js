import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/produtos')
      .then(response => {
        console.log('Resposta da API:', response.data); // Log da resposta para verificar se está funcionando
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - {produto.preco} R$
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
