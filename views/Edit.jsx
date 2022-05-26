const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout>
                <h1>{product.name} Edit Page</h1>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={product.name} />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={product.price}/>
                    <label htmlFor="inventory">Inventory remaining:</label>
                    <input type="text" id="inventory" name="inventory" defaultValue={product.inventory}/>
                    <input type="submit" value="Edit Product"/>
                </form>
            </DefaultLayout>
        )
    }
}