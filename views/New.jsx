const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Create A New Product</h1>
                <form action="/products" method="POST"> 
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price"/>
                    <input type="submit" value="Create Product"/>
                </form>
            </DefaultLayout>
        )
    }
}