import { Fragment } from "react";
import { useHistory, useParams, Route, Link } from "react-router-dom";
import classes from "./SelectedProduct.module.css";
import ProductSpec from "./ProductSpec";

const SelectedProduct = (props) => {
  
  const params = useParams();

  return (
    <Fragment>
      <div className={classes.div_container}>
        <div className={classes.div_pnam}>{props.pnam}</div>
        <div className={classes.div_desc}>{props.desc}</div>
        <div className={classes.div_price}>${props.price}</div>
      </div>

      <div>
        <Route path={"/products/:productId"} exact>
          <div className={classes.div_links_container}>
            <Link
              className={classes.flat_link}
              to={`/products/${params.productId}/spec`}
            >
              Display Spec
            </Link>
            <Link className={classes.flat_link} to={"/products"}>
              Return To Products
            </Link>
          </div>
        </Route>
    </div>

    <div>
        <Route path={"/products/:productId/spec"}>
          <ProductSpec />
          <div className={classes.div_links_container}>
          <Link className={classes.flat_link} to={`/products/${params.productId}`}>
            Hide Spec
          </Link>
          <Link className={classes.flat_link} to={"/products"}>
            Return To Products
          </Link>
          </div>  
        </Route>
      </div>

    </Fragment>
  );
};

export default SelectedProduct;
