import SearchBoard from './components/SearchBoard'
import Baidu from './components/Baidu'
import './css/app.css'

function App() {
  return (
    <div
      style={{
        widows: '50%',
        marginTop: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Baidu />
      <SearchBoard />
    </div>
  )
}

export default App
