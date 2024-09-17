import React from 'react';
import Produtos from './Produtos';  // Importando o componente Produtos

function App() {
  return (
    <div>
      <h1>SimplesPDV - Produtos</h1>
      <p>Bem-vindo ao sistema de gerenciamento de produtos!</p>
      <Produtos />  {/* Exibindo o componente Produtos */}
    </div>
  );
}

export default App;

