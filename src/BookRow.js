import React from "react";

function BookRow(props) {
  const book = props.book;
  console.log("[BookRow.js] book: ", book);
  //Map through book.authors (which is an array)
  const authors = book.authors.map(author => <div>{author.name}</div>);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
