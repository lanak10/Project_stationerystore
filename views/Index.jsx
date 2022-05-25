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
                                        <p><a href={`/products/${product._id}`}>{product.name}</a></p>
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