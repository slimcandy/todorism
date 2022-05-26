import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import AppWrapper from "./components/AppWrapper";
import People from "./components/People";
import CurrentUser from "./components/CurrentUser";

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <CurrentUser />
      <aside>
        <People />
      </aside>
      <hr />
      <main>
        <Header />
        <ToDo />
        <Footer />
      </main>
    </AppWrapper>
  </Provider>
);

export default App;
