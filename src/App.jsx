import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  )
}

export default App
