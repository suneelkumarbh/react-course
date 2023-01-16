import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
