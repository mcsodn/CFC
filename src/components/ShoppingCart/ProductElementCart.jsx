import { useState,useEffect } from 'react';
import styles from './ShoppingCart.module.css';

// Карточка продукта в списке корзины
const ProductElementCart = ({product, onChange, onDelete}) => {
  
  const [productSum, setProductSum] = useState(product.sum);
  useEffect(() => {setProductSum(product.sum)},[product]);

  return <div className={`${styles.shopping_cart__product}`}>
    <div>{product.name}</div>
    <div>
      <input type="button" value="-" onClick={() => {
        if (productSum > 1) {
          setProductSum(productSum - 1);
          onChange(product.id,productSum - 1);
        }
        }} />
      <input type="number" className={`${styles.product_counter}`} value={productSum} onChange={e => {
          if (e.target.value > 1) {
            setProductSum(+e.target.value);
            onChange(product.id,+e.target.value);
          } else {
            setProductSum(1);
            onChange(product.id,1);
          }
        }} />
      <input type="button" value="+" onClick={() => {
        setProductSum(productSum + 1);
        onChange(product.id,productSum + 1);
        }} />
    </div>
    <input type="button" value="×" onClick={() => {onDelete(product.id)}} />
  </div>
}

export default ProductElementCart;