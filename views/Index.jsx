const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Index extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <div>
                    <p>Index Page</p>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index