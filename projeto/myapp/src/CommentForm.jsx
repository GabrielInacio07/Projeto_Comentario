import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  // Hooks useState para armazenar o nome do autor e o texto do comentário
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário
    if (author && text) { // Verifica se os campos estão preenchidos
      // Envia o novo comentário para o componente principal com a data/hora atual
      onAddComment({ author, text, timestamp: new Date().toISOString() });
      // Limpa os campos após o envio
      setAuthor('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para o nome do autor */}
      <input
        type="text"
        placeholder="Nome do autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {/* Campo para o texto do comentário */}
      <textarea
        placeholder="Escreva seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* Botão de envio */}
      <button type="submit">Enviar Comentário</button>
    </form>
  );
}

export default CommentForm;
