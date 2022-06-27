import React from "react";
import { Provider } from "react-redux";
import store from "../../../stores/store";
import Panel from "../Panel/Panel";
import { UIKitPage } from "../UIKitPage/UIKitPage";

import "../../../../styles/index.css";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Panel />
        <UIKitPage />
      </main>
    </Provider>
  );
}

export default App;
