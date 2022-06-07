import { Provider } from 'react-redux'
import store from './store/store'
import { Panel } from './components'

import './style.css'

const App = () => (
  <Provider store={store}>
    <main>
      <Panel />
    </main>
  </Provider>
)

export default App
