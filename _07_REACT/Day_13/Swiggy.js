import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import Stores from "./Stored";

function App() {
  return (
    <>
      <Provider store={Stores}>
        <Header></Header>
        <Card></Card>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
