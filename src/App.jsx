import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import VaccineTracker from './pages/VaccineTracker'
import DigitalCard from './pages/DigitalCard'
import Awareness from './pages/Awareness'
import Profile from './pages/Profile'
import Login from './pages/Login'
import PublicView from './pages/PublicView'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vaccine-tracker" element={<VaccineTracker />} />
        <Route path="/digital-card" element={<DigitalCard />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/public/:id" element={<PublicView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
