import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Voyager } from 'graphql-voyager'
import '@leanix/reporting'
import './assets/css/tailwind.css'
import './assets/css/voyager.css'

async function introspectionProvider(query) {
  const data = await lx.executeGraphQL(query)
  return { data }
}

ReactDOM.render(
  <Voyager introspection={introspectionProvider} workerURI={'/assets/js/voyager.worker.js'} />,
  document.getElementById('report'),
)
