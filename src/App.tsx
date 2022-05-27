import ToDoLists from "./components/ToDoLists2";
import { Provider } from "react-redux";
import store from "./store/store";
import AppWrapper from "./components/AppWrapper";

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <main>
        <ToDoLists />
      </main>
    </AppWrapper>
  </Provider>
);

export default App;
