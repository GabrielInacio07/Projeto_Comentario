import React from 'react';

function CommentList({ comments }) {
  return (
    <div>
      {/* Verifica se há comentários; se houver, exibe cada comentário individualmente */}
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="comment">
            {/* Nome do autor do comentário */}
            <h4>{comment.author}</h4>
            {/* Texto do comentário */}
            <p>{comment.text}</p>
            {/* Data e hora de publicação formatada */}
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))
      ) : (
        // Exibe mensagem se não houver comentários
        <p>Nenhum comentário ainda.</p>
      )}
    </div>
  );
}

export default CommentList;
