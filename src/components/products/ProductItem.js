import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {

  return (
    <li className={classes.item_line}>
      <div className={classes.name_box}>
        <div className={classes.div_pnam}>{props.pnam}</div>
        <div className={classes.div_price}>${props.price}</div>
      </div>
      <div className={classes.div_desc}>{props.desc}</div>

      <div className={classes.div_link}>
        <Link className={classes.btn_flat} to={`/products/${props.id}`}>
          PRODUCT DETAILS
        </Link>
      </div>
    </li>
  );
};

export default ProductItem;
