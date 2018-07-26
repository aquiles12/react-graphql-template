import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo"
import { client, store } from '../store'

const App = (props) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    </Provider>
  )
}

export default App
