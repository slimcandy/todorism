import React from "react";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => (
  <Provider store={store}>
    <aside>
      <Navigation />
    </aside>
    <hr />
    <main>
      <Header />
      <ToDo />
      <Footer />
    </main>
  </Provider>
);

export default App;
