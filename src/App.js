import React from "react";
import Content from "./components/content/Content";
import myData from "./data.json";

import "./App.scss";

function App() {
  return (
    <section>
      <Content item={myData} />
    </section>
  );
}

export default App;
