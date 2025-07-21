import styles from './ShoppingCart.module.css';

// Каталог продуктов
const ProductList = ({products,onAddProduct}) => {
  return <>
    <h2>Каталог товаров</h2>
    <div className={`${styles.product_list}`}>
      
      {products.map(product => 
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>учебный курс</p>
          <input type="button" value="В корзину" onClick={() => {onAddProduct(product.id)}} />
        </div>
      )}
    </div>
  </>
}

export default ProductList;