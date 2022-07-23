
import products from '../data/productData.json';
import ProductList from '../components/products/ProductList';

const Products = () => {

  return (
    <ProductList products={products}/>
  )
 
};

export default Products;
