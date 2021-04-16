import RouterComp from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <RouterComp />
      </div>
    </Provider>
  )
}

export default App
