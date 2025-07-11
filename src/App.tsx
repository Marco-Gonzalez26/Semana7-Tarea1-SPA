import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { PostPage } from './pages/PostPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/post/:id' element={<PostPage />} />
    </Routes>
  )
}

export default App
