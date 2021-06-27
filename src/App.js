import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [resorceType, setResorceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resorceType]);
  return (
    <>
      <div className="App">
        <button onClick={() => setResorceType("posts")}>Posts</button>
        <button onClick={() => setResorceType("users")}>Users</button>
        <button onClick={() => setResorceType("comments")}>Comments</button>
      </div>
      <h1>{resorceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
