import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentCounter from './CommentCounter';
import './App.css';



function App() {
  const [comments, setComments] = useState([]);

  // Carrega os comentários do localStorage
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  // Atualiza o localStorage sempre que os comentários mudarem
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  // Adiciona um novo comentário e atualiza a lista
  const handleAddComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div className="App">
      <h1>Comentários em Tempo Real</h1>
      <CommentForm onAddComment={handleAddComment} />
      <CommentCounter count={comments.length} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
