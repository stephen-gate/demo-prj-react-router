import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

const sortProducts = (products, sortBy, sortAsc) => {
  if (sortBy === "price") {
    return products.sort((productA, productB) => {
      if (sortAsc) {
        return productA.price > productB.price ? 1 : -1;
      } else {
        return productA.price < productB.price ? 1 : -1;
      }
    });
  }
  if (sortBy === "alpha") {
    return products.sort((productA, productB) => {
      if (sortAsc) {
        return productA.pnam > productB.pnam ? 1 : -1;
      } else {
        return productA.pnam < productB.pman ? 1 : -1;
      }
    });
  }
};

const ProductList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let sortedProducts = [];
  let sorted = false;
  if (queryParams.get("price") === "asc") {
    sortedProducts = sortProducts(props.products, "price", true);
    sorted = true;
  }

  if (queryParams.get("price") === "desc") {
    sortedProducts = sortProducts(props.products, "price", false);
    sorted = true;
  }

  if (queryParams.get("alpha") === "desc") {
    sortedProducts = sortProducts(props.products, "alpha", false);
    sorted = true;
  }

  if (!sorted) {
    sortedProducts = sortProducts(props.products, "alpha", true);
  }

  const sortAlphaHandler = () => {
    if (!sorted) {
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
        <button
        onClick={sortAlphaHandler}>
          Sort by Name
        </button>
        <button onClick={sortPriceHandler}>
          Sort by Price
        </button>
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
