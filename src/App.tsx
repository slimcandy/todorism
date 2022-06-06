import { Provider } from "react-redux";
import store from "./store/store";
import { Panel } from "./components";

const App = () => (
  <Provider store={store}>
    <main>
      <Panel />
    </main>
  </Provider>
);

export default App;
