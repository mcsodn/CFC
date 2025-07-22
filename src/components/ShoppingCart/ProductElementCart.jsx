import styles from './ShoppingCart.module.css';

// Карточка продукта в списке корзины
const ProductElementCart = ({product, onChange, onDelete}) => {

  return <div className={`${styles.shopping_cart__product}`}>
    <div>{product.name}</div>
    <div>
      <input type="button" value="-" onClick={() => {
        if (product.sum > 1) {
          document.getElementById('productCounter').value = product.sum - 1;
          onChange(product.id,product.sum - 1);
        }
        }} />
      <input type="number" id='productCounter' className={`${styles.product_counter}`} value={product.sum} onChange={e => {
          if (e.target.value > 1) {            
            document.getElementById('productCounter').value = +e.target.value;
            onChange(product.id,+e.target.value);
          } else {
            document.getElementById('productCounter').value = 1;
            onChange(product.id,1);
          }
        }} />
      <input type="button" value="+" onClick={() => {
        document.getElementById('productCounter').value = product.sum + 1;
        onChange(product.id,product.sum + 1);
        }} />
    </div>
    <input type="button" value="×" onClick={() => {onDelete(product.id)}} />
  </div>
}

export default ProductElementCart;