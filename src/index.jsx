import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Voyager } from 'graphql-voyager'
import '@leanix/reporting'
import './assets/css/tailwind.css'
import './assets/css/voyager.css'

class CustomReport extends React.Component {
  constructor() {
    super()
  }

  async introspectionProvider(query) {
    const data = await lx.executeGraphQL(query)
    return { data }
  }

  render() {
    return (
      <Voyager
        introspection={this.introspectionProvider}
        displayOptions={{ skipRelay: false, showLeafFields: true }}
      />
    )
  }
}

ReactDOM.render(<CustomReport />, document.getElementById('report'))
