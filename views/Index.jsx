const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Index extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <DefaultLayout title="Index Stationery Dreams">
                <div>
                    <nav>
                        <a href="/products/new">Add a New Product</a>
                    </nav>
                    <ul>
                        {
                            products.map(product => {
                                return (
                                    <li key={product._id}>
                                        <img class="image" src={product.image} alt="" />
                                        <p>The <a href={`/products/${product._id}`}>{product.name}</a> costs ${product.price}. There are {product.inventory} of the {product.name} remaining in stock.</p>
                                        <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                        <br />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index