import React from "react";
import "./App.css";
import Piano from "./Piano";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Roboto", "sans-serif", "Monoton", "cursive"],
  },
});

function App() {
  return (
    <div className="App">
      <Piano />
    </div>
  );
}

export default App;
