import classes from './ProductSpec.module.css';

const ProductSpec = () => {

  const text_spec="An example of react-router Nested Routes being used" +
  " to conditionally modify which components are displayed," +
  " and as such used in place of react State Management. ";

  return (

<div className={classes.div_container}>
        <div className={classes.div_title}>Product Spec</div>
        <div className={classes.div_spec}>{text_spec}</div>
      </div>

  );
};

export default ProductSpec;
