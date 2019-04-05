import React, { Component } from 'react';
import Product from "./Products"
import Title from "./Title";
import  { ProductConsumer } from '../Context';
export default class ProductList extends Component {
   
    render() { 

        return ( 

 <React.Fragment>
<div className="py-5">
<div className="container">
<Title name="our" title="products" />

<div className="row">
<ProductConsumer>
{ (value)=>{
return value.products.map(product =>{
    return <Product key={product.id} products = {product} />
})
}}    
</ProductConsumer>
</div>
</div>
</div>
 </React.Fragment>
 //<Product/>
    
         );
    }
}
