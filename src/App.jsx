import Header from './Header'
import Mid from './Mid'
import Cards from './Cards'
import Gallery from './Gallery'
import Footer from './Footer'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Header />
        <Mid />
        <Cards />
        <Gallery />
        <Aftermovie />
        <Footer />
      </div>
    </>
  )
}

export default App