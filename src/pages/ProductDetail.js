import {useParams} from "react-router-dom";
import products from '../data/productData.json';
import SelectedProduct from "../components/products/SelectedProduct";

const ProductDetail = () => {

      const params = useParams();
      const product = products.find(product => product.id === params.productId);

if (!product){
  return <p>No product with this id:</p>
}

  return (
    <section>
      <SelectedProduct 
      pnam={product.pnam} 
      text={product.text} 
      desc={product.desc}
      price={product.price}
      />
    </section>
  );
};

export default ProductDetail;
