
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

import classes from './AppDemoRouter.module.css';


// temp_prj_plate

const AppDemoRouter = () => {
  return (
    <div className={classes.div_static_plate}>
      <Layout>
      <Switch>
          <Route path="/" exact >
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </Layout>
</div>
  )
}

export default AppDemoRouter