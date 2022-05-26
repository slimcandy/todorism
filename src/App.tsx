import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Navigation from "./components/Navigation";
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
        <Navigation />
      </aside>
      <hr />
      <main>
        <People />
        <Header />
        <ToDo />
        <Footer />
      </main>
    </AppWrapper>
  </Provider>
);

export default App;
