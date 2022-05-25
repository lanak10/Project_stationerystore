const React = require('react')
const DefaultLayout = require('./Layout/DefaultLayout')

class Show extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <div>
                    <p>Show Page</p>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show