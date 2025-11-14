import React from "react";
import Livre from "./Livre";
function TableList({ livres }) {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {livres.map((livre, index) => (
          <tr key={index}>
            <td>{livre.title}</td>
            <td>{livre.author}</td>
            <td>{livre.publicationYear}</td>
            <td>{livre.genre}</td>
            <td>{livre.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;

