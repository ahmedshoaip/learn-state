import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDeletClick(productId){
  let newProdaucts=[]
  for(let i=0;i<products.length;i++){
    if(products[i].id===productId){
      if(products[i].count>1){
        let newProduct={...products[i],count:products[i].count-1}
        newProdaucts.push(newProduct);
      }
      

  }else{
    newProdaucts.push(products[i]);
  }
setProducts(newProdaucts);}
//  setProducts(products.filter(product=>{
//     return product.id !== productId
//  }))


}

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={()=>{
            handleDeletClick(product.id)
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
