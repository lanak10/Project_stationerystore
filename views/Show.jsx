const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout>
                <div>
                    <h1>{product.name} Show Page</h1>
                    <img class="image" src={product.image} alt="" />
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    <p>{product.inventory === 0 ? `${product.name} is OUT OF STOCK` : `There are ${product.inventory} items remaining in stock.`}</p>
                    {/* <h4>🛒 Cart: clicks</h4> */}
                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                    <br></br>

                    {/* <button class={product.inventory > 0 ? "buyButton" : "noBuyButton"}><a href={`/products/${product._id}/buy`}>ADD TO CART</a></button> */}
                    <form action={`/products/${product._id}/buy?_method=PUT`} method="POST">
                        <input class={product.inventory > 0 ? "buyButton" : "noBuyButton"} type="submit" value="ADD TO CART" />
                    </form>

                    <br></br>
                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={'/products'}>Continue Shopping</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

// onClick={() => {product.inventory--}}

// REACT HOOKS
// const { useState } = require('react/cjs/react.production.min')
// const [quantity, setQuantity] = useState(`${product.inventory}`)
// const decrementCounter = () => setQuantity({quantity} - 1)