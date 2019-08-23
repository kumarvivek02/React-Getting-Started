import React from "react";
import TopNavigationBar from "./TopNavigationbar";

var title = ["Adam", "Alice", "Petty", "Tom"];

function HomePage(props) {
  return (
    <div>
      <TopNavigationBar />
      <h1> This is our header</h1>
      <ul>
        {title.map(e => (
          <li>{e.length}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
