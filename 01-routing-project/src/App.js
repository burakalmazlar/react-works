import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.8,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.6),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/help" exact>
            <p>Products help page.</p>
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </AnimatedSwitch>
      </main>
    </div>
  );
}

export default App;
