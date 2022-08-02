import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

const ProductList = (props) => {
  
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const receivedProducts = props.products;
  let sortedProducts = [];

  if (queryParams.get("price") === "asc") {
    sortedProducts = receivedProducts.sort((productA, productB) => {
      return productA.price > productB.price ? 1 : -1;
    });
  }

  if (queryParams.get("price") === "desc") {
    sortedProducts = receivedProducts.sort((productA, productB) => {
      return productA.price < productB.price ? 1 : -1;
    });
  }

  if (queryParams.get("alpha") === "asc") {
    sortedProducts = receivedProducts.sort((productA, productB) => {
      return productA.pnam > productB.pnam ? 1 : -1;
    });
  }

  if (queryParams.get("alpha") === "desc") {
    sortedProducts = receivedProducts.sort((productA, productB) => {
      return productA.pnam < productB.pnam ? 1 : -1;
    });
  }

  if (queryParams.get("alpha") === null && queryParams.get("price") === null) {
    sortedProducts = receivedProducts.sort((productA, productB) => {
      return productA.pnam > productB.pnam ? 1 : -1;
    });
  }

  const sortAlphaHandler = () => {
    if (
      queryParams.get("alpha") === null &&
      queryParams.get("price") === null
    ) {
      history.push("/products?alpha=desc");
      return;
    }

    if (queryParams.get("alpha") === "asc") {
      history.push("/products?alpha=desc");
    } else {
      history.push("/products?alpha=asc");
    }
  };

  const sortPriceHandler = () => {
    if (queryParams.get("price") === "asc") {
      history.push("/products?price=desc");
    } else {
      history.push("/products?price=asc");
    }
  };

  return (
    <Fragment>
      <div className={classes.div_sorting}>
        <button onClick={sortAlphaHandler}>Sort by Name</button>
        <button onClick={sortPriceHandler}>Sort by Price</button>
      </div>

      <ul className={classes.div_list}>
        {sortedProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            pnam={product.pnam}
            price={product.price}
            desc={product.desc}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductList;
