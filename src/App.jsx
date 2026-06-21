import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ColonialDevelopment from './pages/ColonialDevelopment'
import ColonialExploitation from './pages/ColonialExploitation'
import DiaryEntry from './pages/DiaryEntry'
import IfIWereInCharge from './pages/IfIWereInCharge'
import Reflection from './pages/Reflection'

function App() {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colonial-development" element={<ColonialDevelopment />} />
          <Route path="/colonial-exploitation" element={<ColonialExploitation />} />
          <Route path="/diary-entry" element={<DiaryEntry />} />
          <Route path="/if-i-were-in-charge" element={<IfIWereInCharge />} />
          <Route path="/reflection" element={<Reflection />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
