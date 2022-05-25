const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const product = this.props.product
        return(
            <DefaultLayout title="Show">
                <div>
                    <h1>Show Page</h1>
                    <p class="content">{product.name}'s price is {product.price}.</p>
                    <button><a href={'/products'}>Back</a></button>
                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show