const React = require('react')
const DefaultLayout=require('./Layout/DefaultLayout')
const mongoose = require('mongoose')
class ShoppingCart extends React.Component{
    render(){
         const products = this.props.products
        return(
            <DefaultLayout title="Shopping Cart">
            <div >
                    <ul>
                        {
                            products[0].products.map((product) => {
                                let source= product.image

                                return (
                                    <li> <p>
                                       {`${product._id}`}
                                    </p>
                                    
                

                                        <img class="img"  src = {source}></img>


                                    </li>
                                )
                            })
                        }</ul>

                 <button><a href={"/products"}>Back to Home</a></button>
            </div>
       </DefaultLayout>
        )
    }
}
module.exports = ShoppingCart