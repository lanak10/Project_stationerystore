const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Index extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <DefaultLayout title="Stationery Dreams">
                <div>
                    <nav>
                        <a href="/products/new">Add a New Product</a>
                    </nav>
                    {/* <ul> */}
                        {
                            products.map(product => {
                                return (
                                    <div class="mainContainer" key={product._id}>
                                        <a href={`/products/${product._id}`}><img class="image" src={product.image} alt="productImage" /></a>
                                        <h3>{product.name}</h3> 
                                        <h4>${product.price}</h4> 
                                        There are {product.inventory} of the {product.name} remaining in stock.
                                        <br />
                                        <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    {/* </ul> */}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index