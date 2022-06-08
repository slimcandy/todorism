import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Panel } from "./components";

import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Panel />
      </main>
    </Provider>
  );
}

export default App;
