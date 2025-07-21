import styles from './ShoppingCart.module.css';
import ProductElementCart from './ProductElementCart';

// Список продуктов в корзине
const ProductListCart = ({products, onChange, onDelete}) => {
  return <div className={`${styles.shopping_cart__product_list}`}>
    {products.map(product => 
        <ProductElementCart key={product.id} product={product} onChange={onChange} onDelete={onDelete} />
      )}
  </div>
}

export default ProductListCart;