import { useReducer } from 'react';
import ProductList from './ProductList';
import ProductListCart from './ProductListCart';
import styles from './ShoppingCart.module.css';


const products = [
  {id: 0, name: 'React (mini)'},
  {id: 1, name: 'React (midi)'},
  {id: 2, name: 'React (maxi)'}
];

const productsInCartInit = [
  {id: 0, name: 'React (mini)', sum: 1}
];

const productCartReducer = (productsInCart,action) => {
  switch (action.type) {
    case 'added':
      { let isInclude = productsInCart.filter(product => product.id === action.id).length > 0 ? true : false;

        if (isInclude) {
          return productsInCart.map(product => ({
              ...product,
              sum: product.id === action.id ? product.sum + 1 : product.sum
            })
          )
        } else {
          return [...productsInCart,{
            id: action.id,
            name: products.filter(product => product.id === action.id)[0].name,
            sum: 1
          }];
        }}

    case 'deleted':
      return productsInCart.filter(product => product.id !== action.id);
    
    case 'deletedAll':
      return [];

    case 'change':
      return productsInCart.map(product => ({
          ...product,
          sum: product.id === action.id ? product.sum = action.sum : product.sum
        })
      )
    default:{
      throw Error('Unknown action: ' + action.type);
    }
   }
}

// Общий компонент корзины
const ShoppingCart = () => {
  const [productsInCart, dispatch] = useReducer(productCartReducer, productsInCartInit);

  const addToCart = (productId) => {
    dispatch({
      type: 'added',
      id: productId
    });
  }

  const deleteFromCart = productId => {
    dispatch({
      type: 'deleted',
      id: productId
    });
  }

  const deleteAllFromCart = () => {
    dispatch({
      type: 'deletedAll'
    });
  }

  const changeSumCart = (productId,newSum) => {
    dispatch({
      type: 'change',
      id: productId,
      sum: newSum
    });
  }

  return <>
    <ProductList products={products} onAddProduct={addToCart} /> 
    <h2>Корзина</h2>
    <input type="button" value="Очистить корзину" className={`${styles.delete_all}`} onClick={()=>{deleteAllFromCart()}} />
    <ProductListCart products={productsInCart} onDelete={deleteFromCart} onChange={changeSumCart} />
  </>
}

export default ShoppingCart;