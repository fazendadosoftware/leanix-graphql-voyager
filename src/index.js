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

// https://app.leanix.net/services/pathfinder/v1/reports/files/d0a0a044-0d97-4d8b-9e2d-c93a0b17a1ba/02aade5e-62de-44be-aa47-ffb6c93032f8/assets/js/voyager.worker.js
ReactDOM.render(
  <Voyager
    introspection={introspectionProvider}
    workerURI={'/assets/js/voyager.worker.js'} />,
  document.getElementById('report'),
)
