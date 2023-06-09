import React from 'react'

import Main from './components/pages/Main'
import { Provider } from 'react-redux'
import store from './components/pages/store'
const App = () => {
  return (
    <div>
       <Provider store={store}>
    <Main/>
   </Provider>
    </div>
  )
}
  export default App