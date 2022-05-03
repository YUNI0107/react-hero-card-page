import './index.css'
import 'twin.macro'
import 'styled-components/macro'
import tw from 'twin.macro'

function App() {
  const hasHover = true

  return (
    <div className="App">
      <h1 className="text-pink-100">Ya</h1>
      <input css={[tw`border`, hasHover && tw`hover:border-black`]} />
    </div>
  )
}

export default App
