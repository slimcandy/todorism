import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import AppWrapper from "./components/AppWrapper";

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <aside>
        <Navigation />
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
