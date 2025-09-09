import Lenis from 'lenis'
import Navbar from './component/Navbar'
import Page from './component/Page'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Page />
      <div className='w-full h-screen bg-[var(--bgc)]'></div>
    </div>
  )
}

export default App