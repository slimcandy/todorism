import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Panel from "./components/Panel/Panel";

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
