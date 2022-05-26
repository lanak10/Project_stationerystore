const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Show Page">
                <div>
                    <img class="image" src={product.image} alt="" />
                    <p class="content">The {product.name}'s price is ${product.price}.</p>
                    <p>{product.inventory === 0 ? `${product.name} is OUT OF STOCK` : `There are ${product.inventory} items remaining in stock.`}</p>
                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                    <br></br>
                    <button class="buyButton">BUY</button>
                    <br></br>
                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={'/products'}>Back to Products</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show