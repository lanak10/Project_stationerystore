const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Index extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <DefaultLayout title="Index">
                <div>
                    <nav>
                        <a href="/products/new">Create a New Product</a>
                    </nav>
                    <ul>
                        {
                            products.map(product => {
                                return (
                                    <li key={product._id}>
                                        <p>The <a href={`/products/${product._id}`}>{product.name}</a> costs ${product.price}. There is {product.inventory} of the {product.name} remaining.</p>
                                        <img src={product.image} alt="" />
                                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                        <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
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